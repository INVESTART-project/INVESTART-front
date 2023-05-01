import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Router } from "@angular/router"


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  id!: number
  private subscription: Subscription

  constructor(private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.activateRoute.params.subscribe(params => this.id = params['id']);
    if (this.id > 99) {
      this.router.navigate(['/not-found'], {
        // Don't change url 
        skipLocationChange: true
        // Browser prev page fix
        // replaceUrl: true
      })
    }
  }
}
