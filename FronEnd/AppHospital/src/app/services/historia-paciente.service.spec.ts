import { TestBed } from '@angular/core/testing';

import { HistoriaPacienteService } from './historia-paciente.service';

describe('HistoriaPacienteService', () => {
  let service: HistoriaPacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriaPacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
