import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';
import { ParentLoggerService } from 'src/app/services/parent-logger.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  // providers: [
  //   {
  //     provide: LoggerService, useClass: ParentLoggerService
  //   }
  // ]
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
