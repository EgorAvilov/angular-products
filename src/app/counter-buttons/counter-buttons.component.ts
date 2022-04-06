import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

  @Input() initialCount = 1;
  @Output() newItemEvent = new EventEmitter<number>();

  value = 1;

  disabled(): boolean {
    return this.value == 1;
  }

  constructor() {
  }

  ngOnInit(): void {
    this.value = this.initialCount;
  }

  onChange(el: number): void {
    this.value += el;
    this.newItemEvent.emit(this.value);
  }
}
