import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Todo } from 'src/app/core/interfaces';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  // @Output() newTodo = new EventEmitter<Todo>()

  newTodoForm: FormGroup;
  isSubmit = false;
  titleTodo: boolean;
  todo: Todo;
  modalData: Todo;


  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder
  ) { }
  ngOnInit(): void {
    this.createNewTodoForm()

  }
  private createNewTodoForm(): void {
    this.newTodoForm = this.fb.group({
      id: [
        this.modalData ? this.modalData.id : null,
      ],
      title: [
        this.modalData ? this.modalData.title : '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      description: [
        this.modalData ? this.modalData.description : '',
      ],
      isDone: [
        this.modalData ? this.modalData.isDone : false
      ],
      priority: [
        this.modalData ? this.modalData.priority : null,
        Validators.required
      ]
    })
  }
  onSubmit(): void {
    console.log(' this.newTodoForm.value ', this.newTodoForm.value)
    if (this.newTodoForm.invalid) {
      this.isSubmit = true;
      return
    }
    this.submit(this.newTodoForm.value);
    console.log("form new-too", this.newTodoForm);
    this.isSubmit = false;
    this.hideModal();
    this.newTodoForm.reset();
  }
  hideModal() {
    this.modalService.hide(1);
  }
  submit(todo: Todo): void { }
}
