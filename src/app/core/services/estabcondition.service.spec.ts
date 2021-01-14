import { TestBed } from '@angular/core/testing';

import { EstabconditionService } from './estabcondition.service';

describe('EstabconditionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstabconditionService = TestBed.get(EstabconditionService);
    expect(service).toBeTruthy();
  });
});
