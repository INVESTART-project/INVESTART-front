import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { ProjectComponent } from './components/project/project.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



const routes: Routes = [
  { path: '', component: MainComponent, title: 'Main Page' },
  { path: 'user-page', component: UserPageComponent, title: 'Личный кабинет' },
  { path: 'project/:id', component: ProjectComponent, title: 'Project Page' },
  { path: '**', component: NotFoundComponent, title: 'Page not found' },
  // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
