import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseService } from './../../firebase.service';
import { TrivialService } from './../../trivial.service';


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
  }

  ngOnInit() {
    this.user = this.fbS.currentUser.displayName;
  }

  ask(cat, dif) {
    this.trS.getQuestion(cat, dif).subscribe(everything => {
      this.everything = everything['results'][0];
      this.question = everything['results'][0]['question'];
      console.log(this.everything);
      this.question = decodeURIComponent(this.question);
      console.log(this.question);
      this.answers = everything['results'][0]['incorrect_answers'];
      this.answers.push(everything['results'][0]['correct_answer']);
      this.arrangeAnswers();
    }, error => {
      console.log(error);
    });
  }

  arrangeAnswers() {
    this.answers.sort(
      function() {
        return 0.5 - Math.random();
      }
    );
    this.answers.forEach((answer, i) => {
      this.answers[i] = decodeURIComponent(answer);
    });
    console.log(this.answers);
  }

  res(ans) {
    console.log(ans);
    if (encodeURIComponent(ans) === this.everything.correct_answer) {
      this.correct = true;
      this.corrects++;
    } else {
      this.correct = false;
      this.wrongs++;
    }
    console.log(this.correct);
    this.fbS.updatePlayerData(this.corrects, this.wrongs);

    this.ask(this.cat, 'medium');
    if (this.cat < 4) {
      this.cat++;
    } else if (this.cat === 4) {
      this.cat = 0;
    }
  }

}
