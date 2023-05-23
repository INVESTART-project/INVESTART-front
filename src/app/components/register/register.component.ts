import { Component } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  login: string = ""
  password: string = ""
  email: string = ""
  phone_number: number = 0

  is_login_valid: boolean

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  register_user(): void {
    this.is_login_valid = this.check_register()
    if (this.is_login_valid) {
      this.router.navigate(['/user-profile'])
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
