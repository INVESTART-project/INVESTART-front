import { Component, OnInit } from '@angular/core';
import { UserList } from 'src/app/models/user/user';
import { UserService } from 'src/app/models/user/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  user: any | undefined
  projects: any
  dev: any
  role: string | null

  constructor(private userService: UserService, private http: HttpClient) { }

  ngOnInit(): void {
    this.role = localStorage.getItem("role")
    let id = localStorage.getItem("user_id");
    this.http.get("http://localhost:8080/auth/user/" + id).subscribe({
      next: (data: any) => {
        this.user = data
        if (this.role == '2') {// if user is dev load his projects
          this.http.get("http://localhost:8080/auth/devByUID/" + this.user['id']).subscribe({
            next: (data: any) => {
              this.dev = data[0]
              this.http.get("http://localhost:8080/startup/getByAId?id=" + this.dev['id']).subscribe({
                next: (data: any) => {
                  this.projects = data
                }
              })
            }
          })
        } else {
          this.http.get("http://localhost:8080/invest/startups/" + id).subscribe({
            next: (data: any) => {
              this.projects = data
            }
          })
        }
      }
    })
  }
}
