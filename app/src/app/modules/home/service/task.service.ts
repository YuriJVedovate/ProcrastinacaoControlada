import { Injectable }     from '@angular/core';
import { ImportanceTask } from '../model/importance-task.enum';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  setColorByImportance(importance: ImportanceTask): string {
    if (importance == 1) {
      return "#2D41A7";
    }
    else if (importance  == 2) {
      return "#ECB800"
    }
    else {
      return "#E42C5F"
    } 
  }

}
