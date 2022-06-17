import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-parent-two-child-two',
  templateUrl: './parent-two-child-two.component.html',
  styleUrls: ['./parent-two-child-two.component.scss']
})
export class ParentTwoChildTwoComponent implements DoCheck {

  constructor() { }

  ngDoCheck() {
    console.log("Parent Two Child Two component change detection");
  }

  onClick() {}

}
