import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDark = false;

  constructor() {}

  ngOnInit(): void {}

  toggleTheme() {
    if (!this.isDark) {
      if (!document.body.classList.contains('dark')) {
        document.body.classList.add('dark');
      }
    } else {
      if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
      }
    }
  }

}
