import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.scss']
})
export class ParentOneComponent implements DoCheck {

  strArrInParent: any[] = [];

  constructor() { }

  ngDoCheck() {
    console.log("Parent One component change detection");
  }

  onClick() {
    this.strArrInParent.push("Please subscribe");
  }

}
