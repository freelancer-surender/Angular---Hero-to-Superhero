import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading = false;
  facts = [
    '71 branches all over the world',
    '23561 employees so far',
    'Has Sold 1.3 Million+ laptops',
    'The four cubes in the logo represent the four companies merged',
    'Second highest smart phone producer in the country',
    '4.7% PC revenue share by vendor worldwide 2018 to 2021',
  ];
  fact = '71 branches all over the world';
  counter = 1;
  isHide = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      }
      if (event instanceof NavigationEnd) {
        this.loading = false;
      }
      if (event instanceof NavigationCancel) {
        this.loading = false;
      }
      if (event instanceof NavigationError) {
        this.loading = false;
      }
    })
  }

  ngOnInit(): void {
      this.counter = 1;
      setInterval(() => {
        this.fact = this.facts[this.counter];
        if (this.counter < 5) {
          this.counter++;
        } else {
          this.counter = 0;
        }
      }, 4000);
      setInterval(() => {
        this.isHide = !this.isHide;
      }, 2000);
  }
}
