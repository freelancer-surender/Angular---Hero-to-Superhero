import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getCountries() {
    return new Observable<string[]>((observer) => {
      setTimeout(() => {
        observer.next([
          'India',
          'USA',
          'UK',
          'Australia',
          'Canada',
          'Singapore',
          'Malaysia',
        ]);
      }, 2000);
    });
  }

  getStatus() {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  }
}
