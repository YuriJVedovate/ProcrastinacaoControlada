import { Component, OnInit } from '@angular/core';
import { TaskList }          from '../../model/task-list';

@Component({
  selector   : 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls  : ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: TaskList[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public setEmmitTaskList(task: string) {
    this.taskList.push({
      task   : task,
      checked: false
    })
  }

  public deleteItemTaskList(itemId: number) {
    if (this.confirmDelete()) {
      this.taskList.splice(itemId, 1)
    }
  }

  public deleteAllTaskList() {
    if (this.confirmDelete()) {
      this.taskList = []
    }
  }

  public confirmDelete() : boolean {
    return window.confirm("Você deseja realmente Deletar? ")
  }

}
