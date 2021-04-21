import { TestBed } from '@angular/core/testing';

import { Multiselect28Service } from './multiselect28.service';

describe('Multiselect28Service', () => {
  let service: Multiselect28Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Multiselect28Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
