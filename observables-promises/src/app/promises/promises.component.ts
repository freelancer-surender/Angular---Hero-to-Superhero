import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss'],
})
export class PromisesComponent implements OnInit {
  isOnline = false;
  status = 'offline';
  myPromise: any;

  constructor() {}

  ngOnInit(): void {
    this.getStatus();
    this.myPromise.then(
      (res: any) => {
        console.log(res);
        this.checkLogic();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getStatus() {
    console.log('Get Status called');
    this.myPromise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        console.log('Received Status Value');
        this.isOnline = true;
        // resolve(this.isOnline);
        reject("DB Connection Error");
      }, 3000);
    });
  }

  checkLogic() {
    console.log('Check Logic called');
    if (this.isOnline) {
      this.status = 'online';
    } else {
      this.status = 'offline';
    }
  }
}
