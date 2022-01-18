import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToHome() {
    this.router.navigate(['home']);
  }

  goToProducts() {
    this.router.navigate(['products']);
  }

  goToAbout() {
    this.router.navigate(['about']);
  }

  goToContact() {
    this.router.navigate(['contact']);
  }

  goToAdmin() {
    this.router.navigate(['admin']);
  }

  goToOffers() {
    this.router.navigate(['offers']);
  }
}
