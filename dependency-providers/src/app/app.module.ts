import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthenticationService } from './authentication.service';
import { HeaderComponent } from './header/header.component';
import { FakeAuthenticationService } from './fake-authentication.service';
import { InjectionToken } from '@angular/core';

const APP_CONFIG = Object.freeze({
  apiURL: 'http://localhost:5000',
  isTest: true
});

export const APP_CONFIG_TOKEN = new InjectionToken<any>('AppConfig');

export function resolveAuth(isTest: Boolean) {
  return isTest ? new FakeAuthenticationService() : new AuthenticationService();
}

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule],
  providers: [
    // AuthenticationService,
    // FakeAuthenticationService
    // {
    //   provide: AuthenticationService, useClass: AuthenticationService
    // },
    {
      provide: FakeAuthenticationService, useExisting: AuthenticationService
    },
    // {
    //   provide: 'APP_CONFIG', useValue: APP_CONFIG
    // },
    {
      provide: APP_CONFIG_TOKEN, useValue: APP_CONFIG
    },
    {
      provide: 'IS_TEST', useValue: false
    },
    {
      provide: AuthenticationService, useFactory: resolveAuth, deps: ['IS_TEST']
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
