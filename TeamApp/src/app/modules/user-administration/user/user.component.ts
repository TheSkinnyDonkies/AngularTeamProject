import { User } from './../../../models/user.model';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public currentUser: User;
  currenUserNameByEmail: string;
  constructor(private authService: AuthService) {
    this.authService.getCurrentAuthUser()
      .subscribe(auth => {
        if (auth !== undefined && auth !== null) {
          this.currentUser = auth;
          this.currenUserNameByEmail = this.currentUser.email.substr(0, this.currentUser.email.indexOf('@'));
        }
      });
  }

  ngOnInit() {
  }

}
