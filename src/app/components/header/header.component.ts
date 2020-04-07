import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy, OnChanges {
  @Input() title: string;
  @Input() subName: string;
  // title = 'Angular TODO';
  isLoginet = false;
  bgColor = 'red'
  arr = ['Angular', 'jS', 'HTML']

  @Output() testOutput = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
  ngOnChanges(): void {
  }
  logIn(event): void {
    console.log('login', event)
    this.isLoginet = !this.isLoginet;
  }
  logIn2(): void {
    this.isLoginet = !this.isLoginet;
    console.log('hmh');
    this.testOutput.emit('Educational project');
  }
  // addItem(item: string): void {
  //   this.arr.push(item)
  // }
}
