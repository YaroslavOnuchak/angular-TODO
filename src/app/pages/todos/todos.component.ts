import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';
import { TodoService } from 'src/app/core/services/todo/todo.service';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {
  todoList: Array<Todo>;
  modalRef: BsModalRef;
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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
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
