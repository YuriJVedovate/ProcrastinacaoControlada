import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }     from './modules/home/pages/home/home.component';
import { TaskListComponent } from './modules/home/pages/task-list/task-list.component';

const routes: Routes = [
  {
    path: "tasks", component: HomeComponent
  },
  {
    path: "", component: TaskListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
