import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAdministrationRoutingModule } from './user-administration-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    UserAdministrationRoutingModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent
],
  exports: [
    LoginComponent,
    SignupComponent
  ]
})
export class UserAdministrationModule { }
