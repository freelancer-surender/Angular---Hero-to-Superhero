import { TestBed } from '@angular/core/testing';

import { NotCompleteGuard } from './not-complete.guard';

describe('NotCompleteGuard', () => {
  let guard: NotCompleteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotCompleteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
