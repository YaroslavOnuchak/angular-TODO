import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
 
  @Input() subName: string;


  // title = 'Angular TODO';

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
