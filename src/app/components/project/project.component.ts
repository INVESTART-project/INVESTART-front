import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { Router } from "@angular/router"
import { HttpClient } from '@angular/common/http';
import { Title } from "@angular/platform-browser";


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  id: number
  sum: number
  window: boolean = false
  project: any
  date: string
  role: string | null
  private subscription: Subscription

  constructor(private http: HttpClient, private activateRoute: ActivatedRoute, private router: Router, private titleService: Title) {
  }

  window_open() {
    this.window = !this.window
  }

  donate() {
    console.log(Number(this.id))
    console.log(localStorage.getItem("user_id"))
    if (this.role == '1') {
      let money = this.sum;
      if (money != 0) {
        const body = {
          id_Startup: Number(this.id),
          id_User: Number(localStorage.getItem("user_id")),
          transMoney: money,
        };
        this.http.post('http://localhost:8080/invest/donate', body).subscribe({
          next: (data: any) => {
            this.window = false
            alert('Средства успешно переведены!')

            this.update()
          },
          error: error => { console.log(error); }
        });
      }
    }
  }

  update() {
    this.role = localStorage.getItem("role")
    this.subscription = this.activateRoute.params.subscribe(params => this.id = params['id']);
    this.http.get('http://localhost:8080/startup/' + this.id).subscribe({
      next: (data: any) => {
        if (data == null) {
          this.router.navigate(['/not-found'], {
            skipLocationChange: true
          })
        }
        this.project = data
        this.date = new Date(data['endDate']).toLocaleDateString()
        this.titleService.setTitle(data["name"])
      },
      error: error => { console.log(error); }
    });
  }

  ngOnInit(): void {
    this.update()

  }
}
