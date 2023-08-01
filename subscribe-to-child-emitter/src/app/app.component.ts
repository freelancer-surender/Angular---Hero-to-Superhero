import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  status = "Offline";
  runStatus = "Stopped";

  changeStatus() {
    this.status = this.status === 'Offline' ? 'Online' : 'Offline';
  }

  changeRunStatus() {
    this.runStatus = this.runStatus === 'Stopped' ? 'Running' : 'Stopped';
  }

  subscribeToChildEmitter(componentRef: any) {
    componentRef.runStatusEmitter.subscribe((res: any) => {
      this.changeRunStatus();
    });
  }

}
