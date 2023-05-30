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

  projects: any
  investors: any

  constructor(private http: HttpClient, private userService: UserService) {

  }

  ngOnInit() {
    this.http.get('http://localhost:8080/startup/all').subscribe({
      next: (data: any) => {
        this.projects = data
      },
      error: error => { console.log(error); }
    });
    this.http.get('http://localhost:8080/auth/investors').subscribe({
      next: (data: any) => {
        console.log(data);
        this.investors = data
      },
      error: error => { console.log(error); }
    });
  }
}
