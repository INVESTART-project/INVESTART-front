import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent {

  name: string = ""
  desc: string = ""
  money: number = 0
  date: Date
  dates: string
  prerr: boolean = false
  role: string | null

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

  }

  create_project() {

    if (this.name == "") {
      this.prerr = true
      return
    }
    if (this.desc == "") {
      this.prerr = true
      return
    }
    if (this.money == 0) {
      this.prerr = true
      return
    }
    console.log("123")
    this.role = localStorage.getItem("role")
    console.log(this.role)
    let id = localStorage.getItem("user_id");
    console.log(id)
    if (this.role == '2') {// if user is dev load his projects
      this.http.get("http://localhost:8080/auth/devByUID/" + id).subscribe({
        next: (dev: any) => {
          this.dates = this.date.toLocaleString()
          const body = {
            name: this.name,
            description: this.desc,
            needMoney: this.money,
            endDate: this.dates,
            author_id: dev[0]['id']
          };
          this.http.post("http://localhost:8080/startup/newProject", body).subscribe({
            next: (data: any) => {
              this.router.navigate(['/project', data['id']])
            }
          })
        }
      })
    };
  }
}
