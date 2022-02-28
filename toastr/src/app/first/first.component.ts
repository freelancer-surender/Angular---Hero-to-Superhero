import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../toastr.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  showToast(type: string) {
    this.toastr.showToast(type, "Please subscribe and support", "top-right", true);
  }

}
