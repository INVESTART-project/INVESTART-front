import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: string = ""
  password: string = ""
  is_login_valid: boolean
  done: boolean = false;
  user: Object

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

  }

  login_user(): void {
    const body = { username: this.login, password: this.password };
    this.check_login(body)
    if (this.is_login_valid) {
      console.log("success")
    }
  }

  reg_redirect() {
    this.router.navigate(['/reg'])
  }

  check_login(body: Object) {
    this.http.post('http://localhost:8080/auth/login', body).subscribe({
      next: (data: any) => {
        console.log(data)
        console.log(data === null)
        if (data === null || data["id"] == null) {
          this.is_login_valid = false
        } else {
          console.log(data); this.user = data; this.done = true; this.is_login_valid = true;
          localStorage.setItem("user_id", data["id"]);
          localStorage.setItem("role", data["role"]["id"]);
          this.router.navigate(['/user-profile'])
        }
      },
      error: error => { console.log(error); this.is_login_valid = false }
    });
  }
}
