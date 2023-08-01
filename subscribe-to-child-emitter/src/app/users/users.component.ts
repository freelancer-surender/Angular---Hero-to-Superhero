import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Output() runStatusEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleStatus() {
    this.runStatusEmitter.emit();
  }

}
