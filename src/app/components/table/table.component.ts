import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseService } from './../../firebase.service';
import { TrivialService } from './../../trivial.service';
import { initDomAdapter } from '@angular/platform-browser/src/browser';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  answers;
  everything;
  question;
  user;
  cat = 0;

  key;
  tableId = '';
  table = {};
  players = [];
  currentPlayer;
  turn = 0;

  constructor(private fbS: FirebaseService,
              private route: ActivatedRoute,
              private trS: TrivialService,
              public aFDb: AngularFireDatabase) {
    // sacar parametro de url
    this.tableId = this.route.snapshot.paramMap.get('id');
    this.currentPlayer = [];
    console.log(this.tableId);
    this.fbS.pushUserIntoTable(this.tableId);
    this.aFDb.object(environment.tableNode + '/' + this.tableId).valueChanges().subscribe(data => {
      this.table = data;
    });
    this.aFDb.list(environment.tableNode + '/' + this.tableId + '/players').valueChanges().subscribe(data => {
      this.players = data;
    });
    this.aFDb.list(environment.tableNode + '/' + this.tableId + '/players', ref => ref.orderByChild('isTurn').equalTo(true))
    .valueChanges().subscribe(data => {
      this.currentPlayer = data[0];
    });
  }

  ngOnInit() {
  }

  start() {
    console.log('started');
    this.fbS.playPauseTable(this.tableId, true);
    this.fbS.updateUserTableInfo(this.tableId, this.players[this.turn].id, this.players[this.turn].score, true);
    this.play();
  }

  play() {
    console.log('playing');
    console.log('current player: ' + this.players[this.turn].name);
    const cat = [Math.floor((Math.random() * this.trS.categories.length))];
    console.log('categoty #' + cat);
    this.ask(cat, 'medium');
  }

  ask(cat, dif) {
    console.log('ask');
    this.trS.getQuestion(cat, dif).subscribe(everything => {
      this.everything = everything['results'][0];
      console.log(this.everything);
      let question = this.everything['question'];
      question = decodeURIComponent(question);
      const answers = this.everything['incorrect_answers'];
      answers.push(this.everything['correct_answer']);
      this.arrangeAnswers(answers, question, this.everything['correct_answer']);
    }, error => {
      console.log(error);
    });
  }

  arrangeAnswers(answers, question, correct) {
    console.log('arrange answers');
    console.log(answers);
    console.log(question);
    answers.sort(
      function() {
        return 0.5 - Math.random();
      }
    );
    answers.forEach((answer, i) => {
      answers[i] = decodeURIComponent(answer);
    });
    console.log(question);
    console.log(answers);
    console.log(correct);
    console.log(this.trS.name);
    this.fbS.getQuestion(this.tableId, question, answers, correct, this.trS.name);
  }

  res(ans) {
    console.log(this.everything);
    console.log(ans);
    if (encodeURIComponent(ans) === this.table['card']['correct']) {
      this.changeTurn(true);
    } else {
      this.changeTurn(false);
    }
    this.play();
  }

  changeTurn(correct) {
    if (correct) {
      this.fbS.updateUserTableInfo(this.tableId, this.players[this.turn].id, this.players[this.turn].score + 1, true);
      console.log('yes');
    } else {
      this.fbS.updateUserTableInfo(this.tableId, this.players[this.turn].id, this.players[this.turn].score, false);
      if (this.turn < this.players.length - 1) {
        this.turn++;
      } else {
        this.turn = 0;
      }
      this.fbS.updateUserTableInfo(this.tableId, this.players[this.turn].id, this.players[this.turn].score, true);
      console.log('no');
    }
    this.currentPlayer = this.players[this.turn];
    console.log('turn: ' + this.turn);
  }
}
