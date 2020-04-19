import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  subname: string;
  headerT = 'TODO';


  testOutputApp(data: string): void {
    this.subname = data

  }
}
