import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.scss']
})
export class ParentOneComponent {

  constructor(private sharedService: SharedService) {}

  increase() {
    this.sharedService.count++;
  }

  print() {
    console.log("Count in the parent one - " + this.sharedService.count);
  }
}
