import { Component, OnInit } from '@angular/core';
import { ChildLoggerService } from 'src/app/child-logger.service';
import { LoggerService } from 'src/app/logger.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  // providers: [
  //   {
  //     provide: LoggerService, useClass: ChildLoggerService
  //   }
  // ]
})
export class ChildComponent implements OnInit {

  constructor(private logger: LoggerService) { }

  ngOnInit(): void {

  }

  log() {
    this.logger.log("Button is clicked");
  }

}
