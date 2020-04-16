import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosComponent } from './pages/todos/todos.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { UserComponent } from './pages/about/user/user.component';
import { AboutUsComponent } from './pages/about/about-us/about-us.component';
import { AboutProjectComponent } from './pages/about/about-project/about-project.component';


const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: 'todos', component: TodosComponent },
  { path: 'nf', component: PageNotFoundComponent },
  {
    path: 'about', component: AboutComponent,
    children: [
      { path: '', redirectTo: 'about-project', pathMatch: 'full' },
      { path: 'user', component: UserComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'project', component: AboutProjectComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
