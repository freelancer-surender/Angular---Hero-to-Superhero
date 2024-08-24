import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FakeAuthenticationService } from '../fake-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;

  // constructor(private auth: AuthenticationService) { }
  constructor(private auth: FakeAuthenticationService) { }

  ngOnInit(): void {
  }

  login() {
    this.isLoggedIn = true;
    this.auth.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
    this.auth.isLoggedIn = false;
  }

}
