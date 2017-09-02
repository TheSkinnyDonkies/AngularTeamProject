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

  constructor(private router: Router, private authService: AuthService) {

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
