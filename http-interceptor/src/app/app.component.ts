import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  getUser() {
    this.http.get('http://something.com/api/user').subscribe((res) => {
      console.log(res);
    });
  }

  getProduct() {
    this.http.get('http://something.com/api/product').subscribe((res) => {
      console.log(res);
    });
  }

  getContact() {
    this.http.get('http://something.com/api/contact').subscribe((res) => {
      console.log(res);
    });
  }
}
