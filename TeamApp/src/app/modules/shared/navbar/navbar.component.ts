import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {

  title: 'Title to be changed';
  user: Observable<firebase.User>;
  currentUserEmail: string;
  currenUserNameByEmail: string;
  public logoPath = './assets/images/logo.png';

  constructor(private authService: AuthService, private router: Router) {
    this.authService.getCurrentAuthUser()
      .subscribe(auth => {
        if (auth !== undefined && auth !== null) {
          this.currentUserEmail = auth.email;
          this.currenUserNameByEmail = this.currentUserEmail.substr(0, this.currentUserEmail.indexOf('@'));
        }
      });
  }

  logout() {
    this.authService.signOut();
  }
  ngOnInit() {
    this.user = this.authService.getCurrentAuthUser();
  }

}
