import { DoctorInterface } from "./doctorInterface";
import { HospitalInteface } from "./HospitalInteface";

export interface HospitalDoctorInterface {
    idDoctorEspecialidad?:string;
    hospital?: HospitalInteface;
    doctor?: DoctorInterface;
    creadoPor?: string;
    fechaCreacion?: Date;
    modificadoPor?: string;
    fechaModificacion?: Date;
  }
  