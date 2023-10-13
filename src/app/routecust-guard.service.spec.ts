import { TestBed } from '@angular/core/testing';

import { RoutecustGuardService } from './routecust-guard.service';

describe('RoutecustGuardService', () => {
  let service: RoutecustGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutecustGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
