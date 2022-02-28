import { Component, OnInit } from '@angular/core';
import { ToastrService } from './toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showToast = false;
  toastrMsg = "";
  toastrType = "";
  toastrPosition = "";

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
      this.toastr.status.subscribe((msg: string) => {
        this.toastrType = localStorage.getItem("toastrType") || "";
        this.toastrPosition = localStorage.getItem("toastrPosition") || "";
        if (msg === null) {
          this.showToast = false;
        } else {
          this.showToast = true;
          this.toastrMsg = msg;
        }
      })
  }

  closeToast() {
    this.showToast = false;
  }
}
