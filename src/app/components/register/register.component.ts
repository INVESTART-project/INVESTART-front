import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  login: string = ""
  email: string = ""
  phone_number: string = ""
  password1: string = ""
  password2: string = ""
  dev: boolean = false

  regerr: boolean = false

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

  }

  register_user(): void {
    if (this.login == "") {
      this.regerr = true
      return
    }
    if (this.email == "") {
      this.regerr = true
      return
    }
    if (this.phone_number == "") {
      this.regerr = true
      return
    }
    if (this.password1 != this.password2) {
      this.regerr = true
      return
    }
    if (this.dev) {
      const body = {
        username: this.login,
        email: this.email,
        phoneNumber: this.phone_number,
        password: this.password1,
        role: {
          "id": 2,
          "name": "DEVTEAM"
        }
      };
      this.http.post('http://localhost:8080/auth/register', body).subscribe({
        next: (data: any) => {
          if (data != undefined) {

            localStorage.setItem("user_id", data["id"]);
            this.router.navigate(['/user-profile'])
          } else {
            alert(data.status);
          }

        },
        error: error => { console.log(error); this.regerr = true }
      });
    } else {
      const body = {
        username: this.login,
        email: this.email,
        phoneNumber: this.phone_number,
        password: this.password1,
        role: {
          "id": 1,
          "name": "INVESTOR"
        }
      };
      this.http.post('http://localhost:8080/auth/register', body).subscribe({
        next: (data: any) => {
          if (data["id"] != null) {
            localStorage.setItem("user_id", data["id"]);
            localStorage.setItem("role", data["role"]["id"]);
            this.router.navigate(['/user-profile'])
          } else {
            this.regerr = true
          }

        },
        error: error => { console.log(error); this.regerr = true }
      });
    }


  }

  check_register(): boolean {
    // boilerplate
    if (true) {
      return true;
    } else {
      return false;
    }
  }
}
