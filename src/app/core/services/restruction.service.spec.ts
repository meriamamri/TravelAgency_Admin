import { TestBed } from '@angular/core/testing';

import { RestructionService } from './restruction.service';

describe('RestructionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestructionService = TestBed.get(RestructionService);
    expect(service).toBeTruthy();
  });
});
