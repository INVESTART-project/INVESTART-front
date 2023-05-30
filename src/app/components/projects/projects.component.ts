import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  find: string | undefined
  projects: any

  constructor(private http: HttpClient, private activateRoute: ActivatedRoute) {

  }

  update() {
    this.activateRoute.queryParams.subscribe(params => {
      this.find = params['find'];
    }
    );
    if (this.find == undefined || this.find == "") {
      this.http.get('http://localhost:8080/startup/all').subscribe({
        next: (data: any) => {
          this.projects = data
        },
        error: error => { console.log(error); }
      });
    } else {
      this.http.get('http://localhost:8080/startup/find/' + this.find).subscribe({
        next: (data: any) => {
          this.projects = data
        },
        error: error => { console.log(error); }
      });
    }
  }

  ngOnInit() {
    this.update()
  }
}
