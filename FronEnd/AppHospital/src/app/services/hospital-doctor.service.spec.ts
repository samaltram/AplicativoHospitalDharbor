import { TestBed } from '@angular/core/testing';

import { HospitalDoctorService } from './hospital-doctor.service';

describe('HospitalDoctorService', () => {
  let service: HospitalDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitalDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
