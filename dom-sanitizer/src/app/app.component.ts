import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchKey: any;

  constructor(private domSanitizer: DomSanitizer) {}

  search(searchTxt: any) {
    // this.searchKey = searchTxt.value;
    this.searchKey = this.domSanitizer.bypassSecurityTrustHtml(searchTxt.value);
  }
}
