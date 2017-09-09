import { Observable } from 'rxjs/Observable';
import { UsersService } from './../../../services/users.service';
import { User } from './../../../models/user.model';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnChanges {

  users: Observable<User[]>;
    constructor(private usersService: UsersService) { }
    ngOnInit() {
      this.users = this.usersService.getUsers();
    }
    ngOnChanges() {
      this.users = this.usersService.getUsers();
    }

}
