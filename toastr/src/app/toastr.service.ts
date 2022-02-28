import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  timer: any;

  status: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }

  showToast(type: string, msg: string, position?: string, autoClose?: boolean) {
    localStorage.setItem("toastrType", type);
    localStorage.setItem("toastrPosition", position || 'top-right');
    this.status.next(msg);

    if (this.timer) {
      clearTimeout(this.timer);
    }

    if (autoClose) {
      this.timer = window.setTimeout(() => {
        this.status.next(null);
      }, 4000);
    }
  }
}
