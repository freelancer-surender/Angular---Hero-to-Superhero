import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAboutComponent } from './edit-about.component';

describe('EditAboutComponent', () => {
  let component: EditAboutComponent;
  let fixture: ComponentFixture<EditAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
