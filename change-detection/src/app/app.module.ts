import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentOneComponent } from './parent-one/parent-one.component';
import { ParentTwoComponent } from './parent-two/parent-two.component';
import { ParentOneChildOneComponent } from './parent-one-child-one/parent-one-child-one.component';
import { ParentOneChildTwoComponent } from './parent-one-child-two/parent-one-child-two.component';
import { ParentTwoChildTwoComponent } from './parent-two-child-two/parent-two-child-two.component';
import { ParentTwoChildOneComponent } from './parent-two-child-one/parent-two-child-one.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentOneComponent,
    ParentTwoComponent,
    ParentOneChildOneComponent,
    ParentOneChildTwoComponent,
    ParentTwoChildTwoComponent,
    ParentTwoChildOneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
