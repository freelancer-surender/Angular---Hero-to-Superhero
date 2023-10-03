
export class ChildDirectiveLoggerService {

  constructor() {
  }

  log(msg: string) {
    console.log("Child directive: " + msg);
  }
}
