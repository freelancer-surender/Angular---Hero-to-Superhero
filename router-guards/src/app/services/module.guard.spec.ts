import { TestBed } from '@angular/core/testing';

import { ModuleGuard } from './module.guard';

describe('ModuleGuard', () => {
  let guard: ModuleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ModuleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
