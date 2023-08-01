import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Output() runStatusEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleStatus() {
    this.runStatusEmitter.emit();
  }

}
