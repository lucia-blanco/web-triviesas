import { Component } from '@angular/core';

import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'triviesas';
  constructor(public fbS: FirebaseService) {
  }
  signOut() {
    this.fbS.logout();
  }
}
