import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';
import { TodoService } from 'src/app/core/services/todo/todo.service';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {
  todoList: Array<Todo>;
  todoData: Todo;
  modalRef: BsModalRef;
  titleTodo: boolean;
  setModal: object;


  public search: string;
  public radioS: string;


  private unsubscribe = new Subject();

  constructor(
    private todoServise: TodoService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.getTodos()
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  openModal(todo?: Todo): void {
    if (todo) {
      this.titleTodo = false;
      this.todoData = todo;
      this.modalRef = this.modalService.show(
        NewTodoComponent,
        Object.assign({}, {
          ignoreBackdropClick: true,
          initialState: {
            titleTodo: this.titleTodo,
            modalData: this.todoData,
            submit: this.updateTodo.bind(this)
          }
        })
      );


    } else {
      this.titleTodo = true;
      this.todoData = null;
      this.modalRef = this.modalService.show(
        NewTodoComponent,
        Object.assign({}, {
          ignoreBackdropClick: true,
          initialState: {
            titleTodo: this.titleTodo,
            modalData: this.todoData,
            submit: this.addTodo.bind(this)
          }
        })
      );

    }

  }
  private getTodos(): void {
    this.todoServise.getTodos()
      .subscribe(data => {
        console.log(data)
        this.todoList = data;
      },
        error => console.error(error)
      )
  }
  deleteTodo(todoId: number): void {
    this.todoServise.delTodo(todoId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.getTodos()
      });
  }
  updateTodo(todo: Todo): void {
    this.todoServise.updateTodo(todo)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.getTodos()
      })
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
