import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  @Input() status = "Offline";
  @Input() runStatus = "Stopped";

  constructor() { }

  ngOnInit(): void {
  }

}
