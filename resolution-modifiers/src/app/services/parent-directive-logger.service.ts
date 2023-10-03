
export class ParentDirectiveLoggerService {

  constructor() {
  }

  log(msg: string) {
    console.log("Parent directive: " + msg);
  }

}
