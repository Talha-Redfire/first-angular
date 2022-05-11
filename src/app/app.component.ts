import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-angular';
  subtitle = 'first-angular-subtitle';
  /*Functions */
  getTest() {
    return 'Hello World i am output from angular function';
  }
}
