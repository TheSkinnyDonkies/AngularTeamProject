import { User } from './../../../models/user.models';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Observable<firebase.User>;
  email: string;
  password: string;
  constructor(private authService: AuthService, private router: Router) {
  }
  emailLogin() {
    this.authService.emailLogin({ email: this.email, password: this.password })
      .then(resolve => this.router.navigate(['/members']))
      .catch(error => console.log(error));
  }

  googleLogin() {
    this.authService.googleLogin()
    .then(resolve => this.router.navigate(['/members']))
    .catch(error => console.log(error));
  }
  logOut() {
    this.authService.signOut();
  }
  ngOnInit() {
  }
}
