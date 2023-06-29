import { TestBed } from '@angular/core/testing';

import { CountrySvcService } from './country-svc.service';

describe('CountrySvcService', () => {
  let service: CountrySvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountrySvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
