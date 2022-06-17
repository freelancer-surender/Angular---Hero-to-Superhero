import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOneChildTwoComponent } from './parent-one-child-two.component';

describe('ParentOneChildTwoComponent', () => {
  let component: ParentOneChildTwoComponent;
  let fixture: ComponentFixture<ParentOneChildTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentOneChildTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentOneChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
