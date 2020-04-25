import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';



@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() delete = new EventEmitter<number>();
  @Output() updata = new EventEmitter<Todo>();
  @Output() edit = new EventEmitter<Todo>();

  public bgColorBadges = {
    'low': 'badge-success',
    'medium': 'badge-warning',
    'hight': 'badge-danger'
  }

  isShowDetails = false;

  constructor() { }

  ngOnInit(): void {
  }
  toggleDetails(): void {
    this.isShowDetails = !this.isShowDetails;
  }
  deleteTodo(todoId: number): void {
    this.delete.emit(todoId)
  }
  togleTodo(): void {
    this.todo.isDone = !this.todo.isDone;
    this.updata.emit(this.todo);
  }
  openModalEdit(todo: Todo): void {
    console.log('item', todo)
    this.edit.emit(todo)
  }

}
