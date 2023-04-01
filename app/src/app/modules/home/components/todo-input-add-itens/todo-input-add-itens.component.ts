import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector   : 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls  : ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() emitItemTaskList = new EventEmitter();
  
  public addItemTaskList : string = "";
  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList() {
    if (this.addItemTaskList.trim()) {
      this.emitItemTaskList.emit(this.addItemTaskList.trim());
    }
    this.addItemTaskList = "";
  }

}
