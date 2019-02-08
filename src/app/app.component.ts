import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 0;
  state = 'neutral';
  textFromUser = ' ';
  inputValue = ' ';
  value = ' ';

  onPositiveClick() {
    this.count++;
  }
  onNegativeClick() {
    this.count = this.count - 3;
  }

  onInputChange(e) {
    this.textFromUser = e.target.value;
  }
}
