import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users = [
    { id: 1, name: 'Harry' },
    { id: 2, name: 'Ron' },
    { id: 3, name: 'Hermione' },
    { id: 4, name: 'Snape' },
    { id: 5, name: 'Hagrid' },
  ];

  refresh() {
    this.users = [
      { id: 1, name: 'Harry' },
      { id: 2, name: 'Ron' },
      { id: 4, name: 'Sirius' },
      { id: 5, name: 'Hagrid' },
      { id: 6, name: 'Dumbledore' },
    ];
  }

  trackByUser(index: number, item: any) {
    // return index
    return item.id
  }
}
