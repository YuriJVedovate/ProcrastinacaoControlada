import { Component, Input, OnInit } from '@angular/core';
import { TaskQueue } from '../../model/task';

@Component({
  selector: 'app-task-lane',
  templateUrl: './task-lane.component.html',
  styleUrls: ['./task-lane.component.scss']
})
export class TaskLaneComponent implements OnInit {

  @Input() icon: string = "";
  @Input() title: string = "";
  @Input() taskList: TaskQueue[] = [];

  public taskTodo: TaskQueue[] = [];
  public taskProgress: TaskQueue[] = [];
  public taskDone: TaskQueue[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
