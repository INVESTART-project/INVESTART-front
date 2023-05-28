import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: string = ""
  password: string = ""
  is_login_valid: boolean

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  login_user(): void {
    console.log(this.login)
    console.log(this.password)
    this.is_login_valid = this.check_login()
    if (this.is_login_valid) {
      this.router.navigate(['/user-profile'])
    }
  }

  reg_redirect() {
    this.router.navigate(['/reg'])
  }

  check_login(): boolean {
    // boilerplate
    if (false) {
      return true;
    } else {
      return false;
    }
  }
}
