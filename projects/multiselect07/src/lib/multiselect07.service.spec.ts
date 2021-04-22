import { TestBed } from '@angular/core/testing';

import { Multiselect07Service } from './multiselect07.service';

describe('Multiselect07Service', () => {
  let service: Multiselect07Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Multiselect07Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
