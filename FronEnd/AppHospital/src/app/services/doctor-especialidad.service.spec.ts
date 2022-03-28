import { TestBed } from '@angular/core/testing';

import { DoctorEspecialidadService } from './doctor-especialidad.service';

describe('DoctorEspecialidadService', () => {
  let service: DoctorEspecialidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorEspecialidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
