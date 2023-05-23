import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserList } from 'src/app/models/user/user';
import { Observable, throwError } from 'rxjs';
import { UserService } from 'src/app/models/user/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  root: UserList | undefined;

  constructor(private http: HttpClient, private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getUser()
      .subscribe((data: UserList) => console.log(JSON.stringify(data)));
  }
}
