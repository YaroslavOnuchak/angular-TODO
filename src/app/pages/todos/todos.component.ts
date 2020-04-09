import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';
import { TodoService } from 'src/app/core/services/todo/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todoList: Array<Todo>;

  constructor(
    private todoServise: TodoService
  ) { }

  ngOnInit(): void {
    this.getTodos()
  }
 
  
  private getTodos(): void {
    this.todoServise.getTodoData()
      .subscribe(data => {
        console.log(data)
        this.todoList = data;
      },
        error => {

        }
      )
  }
  deleteTodo(todoId: number): void {
    this.todoServise.deleTodoData(todoId)
      .subscribe(() => {
       this.getTodos()
      });
    }
    updateTodo(todo:Todo):void{
      this.todoServise.updateTodo(todo)
      .subscribe()
      
    }
    addTodo(todo:Todo):void{
  this.todoServise.addTodo(todo)
  .subscribe(() => {
    this.getTodos()
   })
}
}
