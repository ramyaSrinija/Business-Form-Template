import { TestBed } from '@angular/core/testing';

import { SameAddressService } from './same-address.service';

describe('SameAddressService', () => {
  let service: SameAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SameAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
