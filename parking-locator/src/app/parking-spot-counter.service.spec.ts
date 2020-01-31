import { TestBed } from '@angular/core/testing';

import { ParkingSpotCounterService } from './parking-spot-counter.service';

describe('ParkingSpotCounterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParkingSpotCounterService = TestBed.get(ParkingSpotCounterService);
    expect(service).toBeTruthy();
  });
});
