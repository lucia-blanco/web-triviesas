import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseService } from './../../firebase.service';
import { TrivialService } from './../../trivial.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {
  answers;
  everything;
  question;
  user;
  cat = 0;

  isAlready = false;
  tableId = '';
  table = {};
  players = [];
  currentPlayer;
  userId;
  turn;

  constructor(private fbS: FirebaseService,
    private route: ActivatedRoute,
    private trS: TrivialService,
    public aFDb: AngularFireDatabase) {

    // cgets param from url (table key);
    // TO DO split table key, this is NOT secure (and also a pain to write)
    this.tableId = this.route.snapshot.paramMap.get('id');
    console.log(this.tableId);

    console.log('subscribes to table ' + this.tableId);
    this.aFDb.object(environment.tableNode + '/' + this.tableId).valueChanges().subscribe(data => {
      this.table = data;
    });

    // gets current user id;
    this.userId = fbS.currentUserId;
    // subscribes to players that are active;
    this.aFDb.list(environment.tableNode + '/' + this.tableId + '/players',
      ref => ref).valueChanges().subscribe(data => {
        this.players = data;
        console.log(this.players);
        console.log(`if player ${this.fbS.currentUserId} is not already in the table, adds it`);
        this.players.forEach(player => {
          if (player.id === this.fbS.currentUserId) {
            this.isAlready = true;
            console.log('player is already in table');
          }
          if (!this.isAlready) {
            console.log(`player ${this.fbS.currentUserId} added to table`);
            this.fbS.pushUserIntoTable(this.tableId);
          }
        });
      });
      this.aFDb.object(environment.tableNode + '/' + this.tableId + '/turn').valueChanges().subscribe(data => {
        this.turn = data;
        this.currentPlayer = (this.players[this.turn]);
        console.log(this.currentPlayer);
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  // starts game
  start() {
    console.log('started');
    this.fbS.playPauseTable(this.tableId, true);
    this.fbS.updateUserTableInfo(this.tableId, this.players[this.turn].id, this.players[this.turn].score, true);
    this.play();
  }

  // play round
  play() {
    console.log('turn: ' + this.players[this.turn].name);
    // gets random category => see trivial.service
    const cat = [Math.floor((Math.random() * this.trS.categories.length))];
    console.log('categoty #' + cat);
    this.ask(cat, 'medium');
  }

  ask(cat, dif) {
    console.log('ask');
    this.trS.getQuestion(cat, dif).subscribe(everything => {
      this.everything = everything['results'][0];
      let question = this.everything['question'];
      question = decodeURIComponent(question);
      const answers = this.everything['incorrect_answers'];
      answers.push(this.everything['correct_answer']);
      this.arrangeAnswers(answers, question, this.everything['correct_answer']);
    }, error => {
      console.log(error);
    });
  }

  // sorts answers
  arrangeAnswers(answers, question, correct) {
    console.log('arrange answers');
    answers.sort(
      function () {
        return 0.5 - Math.random();
      }
    );
    answers.forEach((answer, i) => {
      answers[i] = decodeURIComponent(answer);
    });
    console.log(question);
    console.log('Correct: ' + correct);
    console.log(this.trS.name);
    this.fbS.setQuestion(this.tableId, question, answers, correct, this.trS.name);
  }

  res(ans) {
    console.log('Answer: ' + ans);
    if (encodeURIComponent(ans) === this.table['card']['correct']) {
      this.changeTurn(true);
    } else {
      this.changeTurn(false);
    }
    console.log(this.players[this.turn].name + ' answered: ' + encodeURIComponent(ans) + ' correct:' + this.table['card']['correct']);
  }

  changeTurn(correct) {
    if (correct) {
      this.fbS.updateUserTableInfo(this.tableId, this.players[this.turn].id, this.players[this.turn].score + 1, true);
    } else {
      // is it's not correct, isTurn is false, and next player's is true
      this.fbS.updateUserTableInfo(this.tableId, this.players[this.turn].id, this.players[this.turn].score, false);
      if (this.turn < this.players.length - 1) {
        this.fbS.changeTurn(this.tableId, this.turn + 1);
      } else {
        this.fbS.changeTurn(this.tableId, 0);
      }
      this.fbS.updateUserTableInfo(this.tableId, this.players[this.turn].id, this.players[this.turn].score, true);
    }
    this.play();
  }
}
