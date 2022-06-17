import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTwoComponent } from './parent-two.component';

describe('ParentTwoComponent', () => {
  let component: ParentTwoComponent;
  let fixture: ComponentFixture<ParentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
