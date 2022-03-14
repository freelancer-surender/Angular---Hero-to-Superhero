import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  activeTab = 'home';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToHome() {
    this.activeTab = 'home';
    this.router.navigate(['home']);
  }

  goToFirstUser() {
    this.activeTab = 'first-user';
    this.router.navigate(['user/1']);
  }

  goToSecondUser() {
    this.activeTab = 'second-user';
    this.router.navigate(['user/2']);
  }

  goToThirdUser() {
    this.activeTab = 'third-user';
    this.router.navigate(['user/3']);
  }

}
