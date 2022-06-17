import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-parent-one-child-one',
  templateUrl: './parent-one-child-one.component.html',
  styleUrls: ['./parent-one-child-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentOneChildOneComponent implements DoCheck {

  @Input()
  myStrArr: any[] = [];

  constructor(private cd: ChangeDetectorRef) { }

  ngDoCheck() {
    console.log(this.myStrArr);
    this.cd.detectChanges();
    console.log("Parent One Child One component change detection");
  }

  onClick() {
    this.myStrArr.push("WebTechTalk");
  }

}
