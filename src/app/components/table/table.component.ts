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
  currentPlayer = {};
  turn = 0;
  userId;

  constructor(private fbS: FirebaseService,
    private route: ActivatedRoute,
    private trS: TrivialService,
    public aFDb: AngularFireDatabase) {

    // console.log('gets param from url (table key)');
    // TO DO split table key, this is NOT secure (and also a pain to write)
    this.tableId = this.route.snapshot.paramMap.get('id');
    console.log(this.tableId);

    // console.log('subscribes to table');
    this.aFDb.object(environment.tableNode + '/' + this.tableId).valueChanges().subscribe(data => {
      this.table = data;
    });

    // console.log('gets current user id');
    this.userId = fbS.currentUserId;
    // console.log('subscribes to players that are active');
    this.aFDb.list(environment.tableNode + '/' + this.tableId + '/players',
      ref => ref.orderByChild('isActive').equalTo(true)).valueChanges().subscribe(data => {
        this.players = data;
        // console.log(`if player ${this.fbS.currentUserId} is not already in the table, adds it`);
        this.players.forEach(player => {
          if (player.id === this.fbS.currentUserId) {
            this.isAlready = true;
            // console.log('player is already in table');
          }
          if (!this.isAlready) {
            // console.log(`player ${this.fbS.currentUserId} added to table`);
            this.fbS.pushUserIntoTable(this.tableId);
          }
        });
        if (this.players[this.turn].id != null) {
          this.fbS.updateUserTableInfo(this.tableId, this.players[this.turn].id, this.players[this.turn].score, false, true);
        }
      });
    // console.log('subscribes to player whos isTurn is true');
    this.aFDb.list(environment.tableNode + '/' + this.tableId + '/players',
      ref => ref.orderByChild('isTurn').equalTo(true))
      .valueChanges().subscribe(data => {
        console.log(data);
        this.currentPlayer = data[0];
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // console.log(this.fbS.currentUserId + ' left table');
    // if (this.players[this.turn].id === this.fbS.currentUserId && this.players.length > 1) {
    //   this.fbS.updateUserTableInfo(this.tableId, this.players[this.turn].id, this.players[this.turn].score, false, false);
    //   this.turn++;
    //   this.play();
    // }
  }

  // starts game
  start() {
    console.log('started');
    this.fbS.playPauseTable(this.tableId, true);
    this.fbS.updateUserTableInfo(this.tableId, this.players[this.turn].id, this.players[this.turn].score, true, true);
    this.play();
  }

  // play round
  play() {
    console.log('playing');
    console.log('current player: ' + this.players[this.turn].name);
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
    console.log(answers);
    console.log('Correct: ' + correct);
    console.log(this.trS.name);
    this.fbS.setQuestion(this.tableId, question, answers, correct, this.trS.name);
  }

  res(ans) {
    console.log('Answer: ' + ans);
    if (encodeURIComponent(ans) === this.table['card']['correct']) {
      this.changeTurn(true);
      console.log(this.players[this.turn].name);
      console.log('ans: ' + encodeURIComponent(ans) + ' ' + this.table['card']['correct']);
    } else {
      this.changeTurn(false);
      console.log(this.players[this.turn].name);
      console.log(encodeURIComponent(ans) + ' ' + this.table['card']['correct']);
    }
    this.play();
  }

  changeTurn(correct) {
    if (correct) {
      this.fbS.updateUserTableInfo(this.tableId, this.players[this.turn].id, this.players[this.turn].score + 1, true, true);
      console.log('yes');
    } else {
      // is it's not correct, isTurn is false, and next player's is true
      this.fbS.updateUserTableInfo(this.tableId, this.players[this.turn].id, this.players[this.turn].score, false, true);
      if (this.turn < this.players.length - 1) {
        this.turn++;
      } else {
        this.turn = 0;
      }
      this.fbS.updateUserTableInfo(this.tableId, this.players[this.turn].id, this.players[this.turn].score, true, true);
      console.log('no');
    }
    // changes current player, this shouldn't be necessary because i'm subscribed to it
    // this.currentPlayer = this.players[this.turn];
    // console.log('turn: ' + this.turn);
  }
}
