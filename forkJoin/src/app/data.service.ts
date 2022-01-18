import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getWidgetOneData() {
    return new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(23);
        observer.complete();
      }, 5000);
    });
  }

  getWidgetTwoData() {
    return new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(15);
        observer.complete();
      }, 1000);
    });
  }

  getWidgetThreeData() {
    return new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(41);
        observer.complete();
      }, 3000);
    });
  }

  getAllData() {
    let observableOne = new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(23);
        observer.complete();
      }, 5000);
    });

    let observableTwo = new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(15);
        observer.complete();
      }, 1000);
    });

    let observableThree = new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(41);
        observer.complete();
      }, 3000);
    });

    return forkJoin([observableOne, observableTwo, observableThree]);

  }

}
