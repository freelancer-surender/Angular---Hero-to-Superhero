import { Component, Inject, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { APP_CONFIG_TOKEN } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    private auth: AuthenticationService,
    // @Inject('APP_CONFIG') appConfig: any,
    @Inject(APP_CONFIG_TOKEN) appConfig: any
  ) {
    console.log(appConfig);
  }

  ngOnInit(): void {
    this.auth.init();
  }

  getAuthStatus() {
    console.log(this.auth.isLoggedIn);
  }

}
