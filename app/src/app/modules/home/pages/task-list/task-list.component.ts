import { Component, OnInit } from '@angular/core';
import { TaskQueue }         from '../../model/task';

@Component({
  selector   : 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls  : ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  public taskList: TaskQueue[] = [
    {
      difficulty: 1,
      importance: 1,
      taskTitle : "Create wireframes",
      category  : "Walmart",
      dueDate   : new Date(),
      status    : 1
    },
    {
      difficulty: 2,
      importance: 2,
      taskTitle : "Create light and dark mode",
      category  : "Coinbase",
      dueDate   : new Date(new Date().setDate(20)),
      status    : 2
    },
    {
      difficulty: 2,
      importance: 3,
      taskTitle : "Urgente",
      category  : "Coinbase",
      dueDate   : new Date(),
      status    : 3
    },
    {
      difficulty: 1,
      importance: 1,
      taskTitle : "Create wireframes",
      category  : "Walmart",
      status    : 1
    },
    {
      difficulty: 2,
      importance: 2,
      taskTitle : "Create light and dark mode",
      category  : "Coinbase",
      dueDate   : new Date(new Date().setDate(19)),
      status    : 2
    },
    {
      difficulty: 2,
      importance: 3,
      taskTitle : "Urgente",
      category  : "Coinbase",
      status    : 3
    },
    {
      difficulty: 3,
      importance: 3,
      taskTitle : "Urgente",
      category  : "Coinbase",
      dueDate   : new Date(new Date().setDate(14)),
      status    : 1
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  filterItens(status: number): TaskQueue[] {
    return this.orderByDueDate(this.taskList).filter(task => task.status === status);
  }

  orderByDueDate(taskList: TaskQueue[]): TaskQueue[] {
    return this.taskList.sort((a, b) => {
      if (a.dueDate === undefined && b.dueDate === undefined) {
        return 0;
      } else if (a.dueDate === undefined) {
        return 1;
      } else if (b.dueDate === undefined) {
        return -1;
      } else {
        return a.dueDate.getTime() - b.dueDate.getTime();
      }
    });
  }

}
