import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() event: EventEmitter<any> = new EventEmitter();
  private ref;

  constructor() { }

  ngOnInit() {
  }

  start(): void {
    let count = this.randomNumber();
    console.log('start');
    this.ref = setInterval(() => {
      this.event.emit(count);
      count = this.randomNumber();
    }, 500);
  }

  stop(): void {
    console.log('stop');
    clearInterval(this.ref);
  }

  private randomNumber(): number {
    return Math.round(1 - 0.5 + Math.random() * (2147483646 - 1 + 1));
  }

}
