import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odds: number[] = [];
  evens: number[] = [];

  onEvent(e) {
    if (e % 2 === 0) {
      this.evens.push(e);
    } else {
      this.odds.push(e);
    }
  }
}
