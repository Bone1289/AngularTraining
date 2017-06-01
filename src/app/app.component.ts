import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'World';
  firstName= 'Harry';
  now: Date = new Date();
  birthday: Date = new Date(1989, 5, 12);
}
