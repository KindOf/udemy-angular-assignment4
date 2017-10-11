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
    let count = 1;
    console.log('start');
    this.ref = setInterval(() => {
      this.event.emit(count);
      count++;
    }, 1000);
  }

  stop(): void {
    console.log('stop');
    clearInterval(this.ref);
  }

}
