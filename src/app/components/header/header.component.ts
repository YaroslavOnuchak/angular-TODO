import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy, OnChanges {
  @Input() title: string;
  @Input() subName: string;

  
  @Output() testOutput = new EventEmitter<string>();
  
  constructor() {}
  
  ngOnInit(): void {
    this.testOutput.emit('Educational project for study Angular');
}
ngOnDestroy(): void {
}
ngOnChanges(): void {
}
 
}
