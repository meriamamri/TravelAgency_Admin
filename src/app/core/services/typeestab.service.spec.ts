import { TestBed } from '@angular/core/testing';

import { TypeestabService } from './typeestab.service';

describe('TypeestabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeestabService = TestBed.get(TypeestabService);
    expect(service).toBeTruthy();
  });
});
