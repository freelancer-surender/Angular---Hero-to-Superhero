import { Directive, Host } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { ChildDirectiveLoggerService } from '../services/child-directive-logger.service';

@Directive({
  selector: '[appChild]',
  // providers: [
  //   {
  //     provide: LoggerService, useClass: ChildDirectiveLoggerService
  //   }
  // ]
})
export class ChildDirective {

  constructor(@Host() private logger: LoggerService) {
    logger.log("In directive");
  }

}
