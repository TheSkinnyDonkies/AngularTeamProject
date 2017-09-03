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
    this.user = authService.currentUser;
  }
  emailLogin() {
    this.authService.emailLogin({ email: this.email, password: this.password });
  }

  googleLogin() {
    this.authService.googleLogin();
  }
  logout() {
    this.authService.signOut();
  }
  ngOnInit() {
  }
}
