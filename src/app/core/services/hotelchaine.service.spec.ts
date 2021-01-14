import { TestBed } from '@angular/core/testing';

import { HotelchaineService } from './hotelchaine.service';

describe('HotelchaineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotelchaineService = TestBed.get(HotelchaineService);
    expect(service).toBeTruthy();
  });
});
