import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTwoChildOneComponent } from './parent-two-child-one.component';

describe('ParentTwoChildOneComponent', () => {
  let component: ParentTwoChildOneComponent;
  let fixture: ComponentFixture<ParentTwoChildOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentTwoChildOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTwoChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
