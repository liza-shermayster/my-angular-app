import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // content = 'positive';
  @Input() content: string;
  btnCount = ' ';
  ngOnInit() {
    console.log('content', this.content);
  }
  onClick() {
    console.log('clicked');
    this.btnCount++;
    // this.content = `clicked ${this.btnCount}`;
  }
}
