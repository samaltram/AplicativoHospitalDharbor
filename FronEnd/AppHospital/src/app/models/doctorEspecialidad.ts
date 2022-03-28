import { EspecialidadIntefase } from './EspecialidadInterface';
import { DoctorInterface } from './doctorInterface';

export interface DoctorEspecialidadInterface {
  idDoctorEspecialidad?:string;
  doctor?: DoctorInterface;
  especialidad?: EspecialidadIntefase;
  creadoPor?: string;
  fechaCreacion?: Date;
  modificadoPor?: string;
  fechaModificacion?: Date;
}
