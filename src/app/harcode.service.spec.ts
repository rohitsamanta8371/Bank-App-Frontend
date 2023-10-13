import { TestBed } from '@angular/core/testing';

import { HarcodeService } from './harcode.service';

describe('HarcodeService', () => {
  let service: HarcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HarcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
