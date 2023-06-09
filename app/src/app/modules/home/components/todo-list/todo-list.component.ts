import { Component, DoCheck } from '@angular/core';
import { TaskList }           from '../../model/task-list';

@Component({
  selector   : 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls  : ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: TaskList[] = JSON.parse(localStorage.getItem('todo-list') || '[]');

  constructor() { }

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  public setEmmitTaskList(task: string) {
    this.taskList.push({
      task   : task,
      checked: false
    })
  }

  public deleteItemTaskList(itemId: number) {
      this.taskList.splice(itemId, 1)
  }

  public deleteAllTaskList() {
    if (this.confirmDelete()) {
      this.taskList = []
    }
  }

  public validateTaskInput(task: TaskList, index : number) {
    if (!task.task &&  this.confirmDelete()) {
      this.deleteItemTaskList(index);
    }
  }

  public confirmDelete() : boolean {
    return window.confirm("Você deseja realmente Deletar? ")
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem('todo-list', JSON.stringify(this.taskList));
    }
  }

}
