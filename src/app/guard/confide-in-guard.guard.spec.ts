import { TestBed } from '@angular/core/testing';

import { ConfideInGuardGuard } from './confide-in-guard.guard';

describe('ConfideInGuardGuard', () => {
  let guard: ConfideInGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConfideInGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
