import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo
  isShowDetails = false;

  constructor() { }

  ngOnInit(): void {
  }
  toggleDetails():void{
    this.isShowDetails = !this.isShowDetails;
  }

}
