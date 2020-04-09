import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';
import { TodoService } from 'src/app/core/services/todo/todo.service';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {
  todoList: Array<Todo>;

  private unsubscribe = new Subject();

  constructor(
    private todoServise: TodoService
  ) { }

  ngOnInit(): void {
    this.getTodos()
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }


  private getTodos(): void {
    this.todoServise.getTodoData()
      .subscribe(data => {
        console.log(data)
        this.todoList = data;
      },
        error => console.error(error)
      )
  }
  deleteTodo(todoId: number): void {
    this.todoServise.deleTodoData(todoId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.getTodos()
      });
  }
  updateTodo(todo: Todo): void {
    this.todoServise.updateTodo(todo)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe()

  }
  async addTodo(todo: Todo): Promise<void> {

    const res = await this.todoServise.addTodo(todo)
      .toPromise();
    this.getTodos()
    // .pipe(takeUntil(this.unsubscribe))
    // .subscribe(() => {
    //   this.getTodos()
    // })
  }
}
