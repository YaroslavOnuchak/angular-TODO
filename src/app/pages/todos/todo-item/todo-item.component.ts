import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';



@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;
  @Output() delete = new EventEmitter()
  @Output() updata = new EventEmitter()
  isShowDetails = false;
 
  constructor(
  
  ) { }

  ngOnInit(): void {
  }
  toggleDetails():void{
    this.isShowDetails = !this.isShowDetails;
  }
  deleteTodo(todoId:number):void{
    this.delete.emit(todoId)
  }
  togleTodo():void{
    this.todo.isDone=!this.todo.isDone;
    this.updata.emit(this.todo)
  }

 
}
