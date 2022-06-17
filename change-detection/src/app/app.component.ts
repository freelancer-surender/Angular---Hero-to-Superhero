import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  // counter = 2;

  // increase() {
  //   setInterval(() => {
  //     this.counter++;
  //   }, 1000);
  // }

  ngDoCheck() {
    // console.log("Angular is checking for changes");
    console.log("Root component change detection");
  }

  onClick() {}
}
