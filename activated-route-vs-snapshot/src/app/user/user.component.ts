import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userId = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.userId = this.route.snapshot.params.id;
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id') || '';
    })
  }
}
