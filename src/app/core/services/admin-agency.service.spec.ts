import { TestBed } from '@angular/core/testing';

import { AdminAgencyService } from './admin-agency.service';

describe('AdminAgencyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminAgencyService = TestBed.get(AdminAgencyService);
    expect(service).toBeTruthy();
  });
});
