import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() value: string;
  @Output() changedValue = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onInputChange(event) {
    this.changedValue.emit(event.target.value);
  }

}
