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
  tableId;
  table;
  players = [];

  constructor(private fbS: FirebaseService,
              private route: ActivatedRoute,
              private trS: TrivialService,
              public aFDb: AngularFireDatabase) {
    // sacar parametro de url
    this.tableId = this.route.snapshot.paramMap.get('id');
    console.log(this.tableId);
    this.fbS.pushUserIntoTable(this.tableId);
    this.aFDb.list(environment.tableNode + '/' + this.tableId + '/players').valueChanges().subscribe(data => {
      console.log(data);
      this.players = data;
    });
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    // sacarlo de la partida??
  }

}
