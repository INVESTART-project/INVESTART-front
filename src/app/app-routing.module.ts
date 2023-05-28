import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { ProjectComponent } from './components/project/project.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { ProjectsComponent } from './projects/projects.component';



const routes: Routes = [
  { path: '', component: MainComponent, title: 'INVESTART' },
  { path: 'user-profile', component: UserPageComponent, title: 'Личный кабинет' },
  { path: 'login', component: LoginComponent, title: 'Вход' },
  { path: 'reg', component: RegisterComponent, title: 'Регистрация' },
  { path: 'project/:id', component: ProjectComponent, title: 'Страница проекта' },
  { path: 'projects', component: ProjectsComponent, title: 'Проекты' },
  { path: '**', component: NotFoundComponent, title: 'Page not found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
