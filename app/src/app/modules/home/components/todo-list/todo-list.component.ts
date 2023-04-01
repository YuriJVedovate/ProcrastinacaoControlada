import { Component, OnInit } from '@angular/core';
import { TaskList }          from '../../model/task-list';

@Component({
  selector   : 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls  : ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: TaskList[] = [
    {
    task: "Minha nova Task", checked: true
    },
    {
      task: "Levar velha no medico", checked: false
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  

}
