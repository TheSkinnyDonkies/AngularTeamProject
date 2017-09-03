import { AuthService } from './../../../../services/auth.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.css']
})
export class EmailLoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  emailLogin(formData) {
    this.authService.emailLogin({ email: formData.value.email, password: formData.value.password })
      .then(resolve => this.router.navigate(['/members']))
      .catch(error => console.log(error));
  }
  ngOnInit() {
  }

}
