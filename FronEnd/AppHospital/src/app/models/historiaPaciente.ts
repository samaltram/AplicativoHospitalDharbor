import { DoctorInterface } from "./doctorInterface";
import { PacienteInterface } from "./pacienteInterface";

export interface HistorialPactienteInterface {
    idHistorialPaciente?:string;
    doctor?: DoctorInterface;
    paciente?: PacienteInterface;
    descripcion?:string;
    fecha?:Date;
    creadoPor?: string;
    fechaCreacion?: Date;
    modificadoPor?: string;
    fechaModificacion?: Date;
  }
  