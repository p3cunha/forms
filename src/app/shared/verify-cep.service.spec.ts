import { TestBed } from '@angular/core/testing';

import { VerifyCepService } from './verify-cep.service';

describe('VerifyCepService', () => {
  let service: VerifyCepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyCepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
