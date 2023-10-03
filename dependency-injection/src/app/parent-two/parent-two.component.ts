import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-parent-two',
  templateUrl: './parent-two.component.html',
  styleUrls: ['./parent-two.component.scss']
})
export class ParentTwoComponent {

  constructor(private sharedService: SharedService) {}
  
  print() {
    console.log("Count in the parent two - " + this.sharedService.count);
  }

}
