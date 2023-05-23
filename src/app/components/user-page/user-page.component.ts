import { Component, OnInit } from '@angular/core';
import { UserList } from 'src/app/models/user/user';
import { UserService } from 'src/app/models/user/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  user: UserList

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.initUser()
  }
  initUser() {
    this.userService.getUser()
      .subscribe((data: UserList) => this.user = { ...data })
  }
}
