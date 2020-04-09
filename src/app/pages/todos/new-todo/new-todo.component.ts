import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
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
      description: ['']
    })

  }
  onSubmit(): void {
    console.log(this.newTodoForm.value)
    if (this.newTodoForm.invalid) {
      this.isSubmit = true;
      this.isValid = true;
      return
    }
    this.isValid = false;
    console.log(this.newTodoForm)
    this.isSubmit = false;
    this.newTodoForm.reset()
  }

}
