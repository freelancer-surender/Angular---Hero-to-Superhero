import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../toastr.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  showToast(type: string) {
    this.toastr.showToast(type, "Please subscribe and support", "top-right", true);
  }

}
