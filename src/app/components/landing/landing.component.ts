import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FirebaseService } from './../../firebase.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private fbS: FirebaseService,
              private router: Router) {

  }

  ngOnInit() {
  }

}
