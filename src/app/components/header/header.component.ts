import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() data: string;


  // title = 'Angular TODO';
  subname = 'Education' + '123'
  isLoginet = false;
  bgColor = 'red'


  constructor() { }

  ngOnInit(): void {
  }

  logIn(event): void {
    console.log('login', event)
    this.isLoginet = !this.isLoginet;
  }

}
