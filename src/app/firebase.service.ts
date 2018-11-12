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
    console.log(this.currentUserId);
    const path = environment.playerNode + `/${this.currentUserId}`;
    console.log(path);
    const data = {
        email: this.authState.email,
        corrects: corrects,
        wrongs: wrongs
    };

    this.afDb.object(path).update(data)
    .catch(error => console.log(error));
  }

  createTable() {
    const path = environment.tableNode;
    console.log(path);
    const data = {
        creator: this.authState.uid,
    };
    this.afDb.list(path).push(data);
    const table = this.afDb.list(path).push(data);
    return table.key;
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
