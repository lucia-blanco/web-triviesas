import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FirebaseService } from './../../firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email;
  password;
  nname;
  nemail;
  npassword;
  error = false;

  constructor(private fbS: FirebaseService,
              private router: Router) {
  }

  ngOnInit() {
  }

  signIn() {
    console.log(this.email);
    this.fbS.emailLogin(this.email, this.password)
    .then(res => {
        if (this.fbS.currentUser) {
            this.router.navigate(['/']);
            console.log('eyy');
        } else {
          this.error = true;
        }
    });
  }

  signUp() {
    this.fbS.emailReg(this.nemail, this.npassword, this.nname)
    .then(res => this.router.navigate(['/']));
  }

}
