import { Component, Input, OnInit } from '@angular/core';
import { ImportanceTask }           from '../../model/importance-task.enum';
import { DifficultyTask }           from '../../model/difficulty-task.enum';
import { TaskService }              from '../../service/task.service';

@Component({
  selector   : 'app-task-difficulty',
  templateUrl: './task-difficulty.component.html',
  styleUrls  : ['./task-difficulty.component.scss']
})
export class TaskDifficultyComponent implements OnInit {

  @Input() difficulty: DifficultyTask = 1;
  @Input() importance: ImportanceTask = 1;

  public dinamicColorOne: any   = {};
  public dinamicColorTwo: any   = {};
  public dinamicColorThree: any = {};

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.setColor();
  }

  setColor(): void {
    const color        = this.taskService.setColorByImportance(this.importance);
    const dinamicColor = { 'background': color };

    switch (this.difficulty) {
      case 1: 
        this.dinamicColorOne = dinamicColor;
        break;
      case 2: 
        this.dinamicColorOne = dinamicColor;
        this.dinamicColorTwo = dinamicColor;
        break;
      case 3: 
        this.dinamicColorOne   = dinamicColor;
        this.dinamicColorTwo   = dinamicColor;
        this.dinamicColorThree = dinamicColor;
        break;
      default: 
        break;
    }
  }

}
