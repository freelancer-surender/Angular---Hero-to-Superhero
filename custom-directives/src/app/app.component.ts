import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  number = 28;
  isClicked = false;

  onClick() {
    this.isClicked = true;
  }
}
