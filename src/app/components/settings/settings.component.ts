import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../firebase.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public newPassword: string;
  public confirmPassword: string;
  public message:  string;

  constructor( private fbS: FirebaseService) { }

  ngOnInit() {
  }

  onSubmit(passwordForm) {
    if (this.newPassword.trim() === this.confirmPassword.trim()) {
      this.fbS.changePassword(this.newPassword.trim()).then(res => {
        document.getElementById('msg').style.color = ('green');
        this.message = 'Changed successfully!';
      })
      .catch(error => {
        document.getElementById('msg').style.color = ('red');
        this.message = error;
      });
      passwordForm.reset();
    } else {
      document.getElementById('msg').style.color = ('red');
      this.message = 'Passwords don\'t match!';
    }
  }

}
