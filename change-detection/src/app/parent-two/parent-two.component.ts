import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-parent-two',
  templateUrl: './parent-two.component.html',
  styleUrls: ['./parent-two.component.scss']
})
export class ParentTwoComponent implements DoCheck {

  constructor() { }

  ngDoCheck() {
    console.log("Parent Two component change detection");
  }

  onClick() {}
}
