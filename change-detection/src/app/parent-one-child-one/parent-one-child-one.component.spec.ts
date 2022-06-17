import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOneChildOneComponent } from './parent-one-child-one.component';

describe('ParentOneChildOneComponent', () => {
  let component: ParentOneChildOneComponent;
  let fixture: ComponentFixture<ParentOneChildOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentOneChildOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentOneChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
