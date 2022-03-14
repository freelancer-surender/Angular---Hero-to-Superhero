import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

import { UiSwitchModule } from 'ngx-toggle-switch';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MainComponent],
  imports: [BrowserModule, UiSwitchModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
