import { AuthService } from './../../../services/auth.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  state: '';
  error: any;
  // userForm = new FormGroup({
  //   email: new FormControl(),
  //   password: new FormControl()
  // });
  newUser = true; // to toggle login or signup form
  passReset = false; // set to true when password reset is triggered

  constructor(private router: Router, private authService: AuthService) {

  }
  // signup(formData) {
  //   this.authService.emailSignUp(formData.value.email, formData.value.password);
  // }

  toggleForm() {
    this.newUser = !this.newUser;
  }
  signup(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.authService.emailSignUp(formData.value.email, formData.value.password)
        .then(
        (success) => {
          this.router.navigate(['/login']);
        });
    }
  }
  ngOnInit() {
  }
}
