import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private toastr: ToastrService) {}

  onSuccess() {
    Swal.fire('Awesome!', 'You have completed the course.', 'success');
  }

  onError() {
    Swal.fire('Oops!', 'Please try again later', 'error');
  }

  onWarning() {
    Swal.fire('Beware!', 'This will delete your profile', 'warning');
  }

  onConfirm() {
    Swal.fire({
      title: 'Are you sure?',
      html: 'If you delete this you cannot revert it? Are you sure you want to delete this?',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't delete`,
    }).then(res => {
      console.log(res);
      if (res.isConfirmed) {
        Swal.fire("Deleted");
      }
    });
  }

  onToastrSuccess() {
    this.toastr.success("Nice work");
  }

  onToastrError() {
    this.toastr.error("Better luck next time", "Error", {
      positionClass: "toast-bottom-right",
      timeOut: 8000
    });
  }
}
