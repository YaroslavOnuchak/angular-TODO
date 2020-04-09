import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Todo } from 'src/app/core/interfaces';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  @Output() newTodo = new EventEmitter<Todo>()

  newTodoForm: FormGroup;
  isSubmit = false;
  isValid = false;
  constructor(
    private fb: FormBuilder

  ) { }
  ngOnInit(): void {
    this.createNewTodoForm()


  }
  private createNewTodoForm(): void {
    this.newTodoForm = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      description: [''],
      isDone: [false]
    })

  }
  onSubmit(): void {
    console.log(this.newTodoForm.value)
    if (this.newTodoForm.invalid) {
      this.isSubmit = true;
      this.isValid = true;
      return
    }
    this.newTodo.emit(this.newTodoForm.value)
    this.isValid = false;
    console.log(this.newTodoForm)
    this.isSubmit = false;
    this.newTodoForm.reset()
  }

}
