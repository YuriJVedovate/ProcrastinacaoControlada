import { Component, Input, OnInit } from '@angular/core';
import { TaskService }              from '../../service/task.service';
import { ImportanceTask }           from '../../model/importance-task.enum';

@Component({
  selector   : 'app-date-box',
  templateUrl: './date-box.component.html',
  styleUrls  : ['./date-box.component.scss']
})
export class DateBoxComponent implements OnInit {

  @Input() dueDate?  : Date;
  @Input() importance: ImportanceTask = 1;

  public dateDisplay: string = "";
  public corDinamica: any = {};

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    if (this.dueDate) {
      let color = this.taskService.setColorByImportance(this.importance);
      this.corDinamica = { 'background': color }
      
      if (this.isDayInCurrentWeek(this.dueDate)) {
        this.dateDisplay = this.formatWeekday(this.dueDate);
      } else {
        this.dateDisplay = this.formatDate(this.dueDate);
      }
    }
  }

  isDayInCurrentWeek(date: Date): boolean {
    const today       = new Date();
    const startOfWeek = this.getStartOfWeek(today);
    const endOfWeek   = this.getEndOfWeek(today);

    return date >= startOfWeek && date <= endOfWeek;
  }

  getStartOfWeek(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay());
  }

  getEndOfWeek(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + (6 - date.getDay()));
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('pt-br', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  formatWeekday(date: Date): string {
    const weekday = date.toLocaleDateString('pt-br', { weekday: 'short' });
    return weekday.charAt(0).toUpperCase() + weekday.slice(1, 3).toLowerCase();
  }

  padZero(value: number): string {
    return String(value).padStart(2, '0');
  }

}

