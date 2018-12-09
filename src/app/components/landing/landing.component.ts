import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseService } from './../../firebase.service';
import { TrivialService } from './../../trivial.service';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  answers;
  everything;
  correct;
  question;
  corrects;
  wrongs;
  user;
  score;
  cat = 0;
  tableId = null;
  tables;

  constructor(private fbS: FirebaseService,
              private trS: TrivialService,
              public aFDb: AngularFireDatabase,
              private router: Router) {

    fbS.currentUserObservable.subscribe(user => {
      this.aFDb.object('/player/' + user.uid).valueChanges().subscribe(data => {
        this.corrects = data['corrects'];
        this.wrongs = data['wrongs'];
      });
    });

    this.aFDb.list(environment.playerNode + '/' + fbS.currentUserId + '/tables',
    ref => ref).valueChanges().subscribe(data => {
      this.tables = data;
    });
  }

  ngOnInit() {
    this.user = this.fbS.currentUser.displayName;
  }

  goToTable() {
    console.log(this.tableId);
    this.router.navigate(['/table', this.tableId]);
  }

  table() {
    console.log('creating table...');
    this.tableId = this.fbS.createTable();
    console.log(this.tableId);
    this.router.navigate(['/table', this.tableId]);
  }

  ask(cat, dif) {
    this.trS.getQuestion(cat, dif).subscribe(everything => {
      this.everything = everything['results'][0];
      this.question = everything['results'][0]['question'];
      // answer comes encoded, so we need to encode/decode sometimes
      this.question = decodeURIComponent(this.question);
      this.answers = everything['results'][0]['incorrect_answers'];
      this.answers.push(everything['results'][0]['correct_answer']);
      this.arrangeAnswers();
    }, error => {
      console.log(error);
    });
  }

  arrangeAnswers() {
    // sorts answeres randomly
    this.answers.sort(
      function() {
        return 0.5 - Math.random();
      }
    );
    this.answers.forEach((answer, i) => {
      this.answers[i] = decodeURIComponent(answer);
    });
  }

  res(ans) {
    if (encodeURIComponent(ans) === this.everything.correct_answer) {
      this.correct = true;
      this.corrects++;
    } else {
      this.correct = false;
      this.wrongs++;
    }
    this.fbS.updatePlayerData(this.corrects, this.wrongs);

    // asks questions from all the categories
    // TO DO chose difficulty
    this.ask(this.cat, 'medium');
    if (this.cat < 4) {
      this.cat++;
    } else if (this.cat === 4) {
      this.cat = 0;
    }
  }

}
