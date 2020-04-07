import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-TODO';
  headerT = 'TODO'
  subname = 'sub name'
  testOutputApp(data:string):void{
    this.subname = data
    console.log(data)
  }
}
