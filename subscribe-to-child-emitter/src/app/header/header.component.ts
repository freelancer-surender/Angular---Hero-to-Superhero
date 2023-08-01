import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  btnText = "Login";

  @Output() statusEmitter = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToUsers() {
    this.router.navigate(['users']);
  }

  goToProducts() {
    this.router.navigate(['products']);
  }

  login() {
    this.btnText = this.btnText === "Login" ? "Logout" : "Login";
    this.statusEmitter.emit();
  }

}
