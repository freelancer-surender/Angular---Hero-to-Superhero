import { Directive } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { ParentDirectiveLoggerService } from '../services/parent-directive-logger.service';

@Directive({
  selector: '[appParent]',
  // providers: [
  //   {
  //     provide: LoggerService, useClass: ParentDirectiveLoggerService
  //   }
  // ]
})
export class ParentDirective {

  constructor() {
  }

}
