import { NgModule}      from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent }              from './components/header/header.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItensComponent }   from './components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent }            from './components/todo-list/todo-list.component';

import { HomeComponent } from './pages/home/home.component';
import { FormsModule }   from '@angular/forms';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskLaneComponent } from './components/task-lane/task-lane.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { DateBoxComponent } from './components/date-box/date-box.component';
import { TaskDifficultyComponent } from './components/task-difficulty/task-difficulty.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent,
    TaskListComponent,
    TaskLaneComponent,
    TaskCardComponent,
    DateBoxComponent,
    TaskDifficultyComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
