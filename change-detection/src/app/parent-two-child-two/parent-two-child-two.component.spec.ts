import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTwoChildTwoComponent } from './parent-two-child-two.component';

describe('ParentTwoChildTwoComponent', () => {
  let component: ParentTwoChildTwoComponent;
  let fixture: ComponentFixture<ParentTwoChildTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentTwoChildTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTwoChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
