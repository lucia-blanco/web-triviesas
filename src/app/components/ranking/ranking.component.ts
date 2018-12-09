import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  players;

  constructor(public aFDb: AngularFireDatabase) {
    this.aFDb.list(environment.playerNode,
    ref => ref.orderByChild('corrects')).valueChanges().subscribe(data => {
      this.players = data.reverse();
    });
  }

  ngOnInit() {
  }

}
