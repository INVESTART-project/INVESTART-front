import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  find: string = ""

  constructor(private router: Router) {

  }

  ffind() {
    this.router.navigate(['/projects'], { queryParams: { find: this.find } })
  }
}
