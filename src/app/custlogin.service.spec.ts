import { TestBed } from '@angular/core/testing';

import { CustloginService } from './custlogin.service';

describe('CustloginService', () => {
  let service: CustloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
