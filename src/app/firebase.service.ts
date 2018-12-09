import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Player } from './player';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  authState = null;
  dbPlayer: Observable<Player> = new Observable(null);

  constructor(private afAuth: AngularFireAuth,
              private afDb: AngularFireDatabase,
              private router: Router) {
    // Remembers login
    this.afAuth.authState.subscribe(res => {
      this.authState = res;
    });

    // Gets users data
    this.dbPlayer = this.afAuth.authState.pipe(switchMap(res => {
      if (res) {
        return this.afDb.object<Player>(environment.playerNode + '/' + res.uid).valueChanges();
      } else {
        return of(null);
      }
    }));
  }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }
  get currentUserObservable(): any {
    return this.afAuth.authState;
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  // Returns current user display name or Guest
  get currentUserDisplayName(): string {
    if (this.authState) {
      return this.authState['displayName'] || 'User without a Name';
    }
  }

  /* ****** LOGIN / REGISTRATION / LOGOUT ****** */

  // Registration
  emailReg(email: string, password: string, name: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((player) => {
      this.authState = player['user'];
      console.log(this.authState);
      if (player) {
        firebase.auth().currentUser.updateProfile({
           displayName: name,
           photoURL: null
        });
      }
      this.regPlayerData();
    })
    .catch(error => console.log(error));
  }

  // Login
  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then((player) => {
      this.authState = player;
      console.log(this.authState);
    })
    .catch(error => console.log(error));
  }

  // Logout
  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
    this.authState = null;
  }

  /* ****** DATABASE ****** */

  // Writes player info on database
  regPlayerData(): void {
    console.log(this.currentUserId);
    const path = environment.playerNode + `/${this.authState.uid}`;
    console.log(path);
    const data = {
        email: this.authState.email,
        corrects: 0,
        wrongs: 0
    };

    this.afDb.object(path).set(data)
    .catch(error => console.log(error));
  }

  updatePlayerData(corrects, wrongs) {
    const path = environment.playerNode + `/${this.currentUserId}`;
    console.log(path);
    const data = {
        name: this.currentUserDisplayName,
        corrects: corrects,
        wrongs: wrongs
    };

    this.afDb.object(path).update(data)
    .catch(error => console.log(error));
  }

  createTable() {
    const path = environment.tableNode;
    const time = new Date().getTime();
    console.log(time);
    const data = {
        creator: this.authState.uid,
        createdAt: time,
        hasStarted: false,
        turn: 0,
        question: null
    };
    console.log(data);
    const table = this.afDb.list(path).push(data);
    this.pushUserIntoTable(table.key);
    this.pushTableIntoUser(table.key);
    return table.key;
  }

  playPauseTable(tableId, started) {
    const path = environment.tableNode;
    this.afDb.list(path).update(tableId, {hasStarted: started});
  }

  changeTurn(tableId, turn) {
    console.log('change turn to: ' + turn);
    const path = environment.tableNode;
    this.afDb.list(path).update(tableId, {turn: turn});
    console.log('turn changed');
  }

  setQuestion(tableId, question, answers, correct, category) {
    const path = environment.tableNode;
    this.afDb.list(path).set(tableId + '/card', {question: question, answers: answers, correct: correct, category: category});
  }

  pushUserIntoTable(id) {
    const path = environment.tableNode +  `/${id}/players/${this.currentUserId}`;
    const data = {
      id: this.authState.uid,
      name: this.authState.displayName,
      isTurn: false,
      score: 0
    };
    console.log(this.authState.displayName);
    this.afDb.object(path).set(data);
  }

  pushTableIntoUser(id) {
    const path = environment.playerNode +  `/${this.currentUserId}/tables/${id}`;
    const data = {
      id: id
    };
    this.afDb.object(path).set(data);
  }

  updateUserTableInfo(tableId, uid, points, turn) {
    console.log('uid: ' + uid +  'score: ' + points + ' turn: ' + turn);
    const path = environment.tableNode +  `/${tableId}/players/${uid}`;
    const data = {
      isTurn: turn,
      score: points
    };
    this.afDb.object(path).update(data);
    console.log('user table info updated');
  }

  /* ****** PASSWORD STUFF ****** */

  // Change password INSIDE app
  changePassword(newPassword) {
    return this.authState.updatePassword(newPassword).then(function() {
    }).catch(function(error) {
      console.log(error);
    });
  }

  // Forgot password, sends MAIL
  resetPassword(email: string) {
    const fbAuth = firebase.auth();

    return fbAuth.sendPasswordResetEmail(email)
      .then(() => console.log('email sent'))
      .catch((error) => console.log(error));
  }

}
