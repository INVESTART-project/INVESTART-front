import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  user: User

  constructor() { }

  ngOnInit(): void {
    this.user = this.initUser()
  }
  initUser(): User {
    return new User("Павел", "Гура", "Александрович", "neloh@gmail.com")
  }
}
