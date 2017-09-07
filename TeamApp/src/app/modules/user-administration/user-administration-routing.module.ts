import { AuthGuard } from './../../services/guards/auth-guard.service';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import { EmailLoginComponent } from './login/email-login/email-login.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login/email-login', component: EmailLoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAdministrationRoutingModule { }
