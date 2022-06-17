import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-parent-one-child-two',
  templateUrl: './parent-one-child-two.component.html',
  styleUrls: ['./parent-one-child-two.component.scss']
})
export class ParentOneChildTwoComponent implements DoCheck {

  constructor() { }

  ngDoCheck() {
    console.log("Parent One Child Two component change detection");
  }

  onClick() {}
}
