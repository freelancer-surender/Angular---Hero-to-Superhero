import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  images = [
    { name: 'mr-cool.jpg', caption: 'Mr Cool' },
    { name: 'sleeping-beauty.jpg', caption: 'Sleeping Beauty' },
    { name: 'awesome.jpg', caption: 'Awesome' },
  ];
}
