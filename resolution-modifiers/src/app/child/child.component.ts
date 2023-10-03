import { Component, OnInit, Optional, Self, SkipSelf } from '@angular/core';
import { ChildLoggerService } from 'src/app/services/child-logger.service';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  providers: [
    {
      provide: LoggerService, useClass: ChildLoggerService
    }
  ]
})
export class ChildComponent implements OnInit {

  // constructor(private logger: LoggerService) { }
  // constructor(@Self() private logger: LoggerService) { }
  // constructor(@SkipSelf() private logger: LoggerService) { }
  constructor(@Optional() private logger: LoggerService) { }

  ngOnInit(): void {
  }

  log() {
    this.logger.log("Button is clicked");
  }

}
