import { TestBed } from '@angular/core/testing';

import { MaintenancedetailsService } from './maintenancedetails.service';

describe('MaintenancedetailsService', () => {
  let service: MaintenancedetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaintenancedetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
