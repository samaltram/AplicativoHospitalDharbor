import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { HistorialPactienteInterface } from 'src/app/models/historiaPaciente';
import { DoctorService } from 'src/app/services/doctor.service';
import { HistoriaPacienteService } from 'src/app/services/historia-paciente.service';
import { HospitalService } from 'src/app/services/hospital.service';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-list-historias',
  templateUrl: './list-historias.component.html',
  styleUrls: ['./list-historias.component.scss']
})
export class ListHistoriasComponent implements OnInit {

  constructor(
    private service: HistoriaPacienteService,
    private serviceH: HospitalService,
    private serviceP: PacienteService,
    private serviceD: DoctorService,

  ) { }

  historiaPaciente:any;
  hospitales: any;
  pacientes:any;
  doctores:any;


  pageActual: number = 1;
  public myCounter: number = 0;
  pag:number =1;

  swEdit:boolean = false;

  selected: HistorialPactienteInterface = {
    idHistorialPaciente: undefined,
    doctor:undefined,
    paciente:undefined,
    descripcion: '',
    fecha:undefined,
    creadoPor: '',
    fechaCreacion: undefined,
    modificadoPor: '',
    fechaModificacion: undefined
  };

  ngOnInit(): void {
    this.getHospitales();
    this.getHistoriaPaciente();
  }

  getHospitales(){
    this.serviceH.getHospitales().subscribe( hosp => {
      this.hospitales = hosp;
       console.log(hosp);
      });
  } 
  getDoctores(){
    this.serviceD.getDoctores().subscribe( hosp => {
      this.doctores = hosp;
       console.log(hosp);
      });
  }
  getPacientes(){
    this.serviceP.getPaciente().subscribe( hosp => {
      this.pacientes = hosp;
       console.log(hosp);
      });
  }



  getHistoriaPaciente(){
    this.service.getHistoriaPaciente().subscribe( hosp => {
      this.historiaPaciente = hosp;
       console.log(hosp);
      });
  }

  onDelete(id:any){
    if (confirm('Esta Seguro de Borrar?')) {
      this.service.delete(id).subscribe();
    }
  }
  
  onSave(dataform:NgForm){
    if (dataform.valid){
      console.log(this.selected);
      this.service.guardar(this.selected).subscribe(data => location.reload());
      this.swEdit =false;
    } else{
      alert("Los Datos no son Validos");
    }
  }



  onSalir(): void{
    this.swEdit=false;
  }

  onPreUpdate(data:any){
    this.selected = Object.assign({}, data);
    this.getDoctores();
    this.getPacientes();
    this.swEdit =true;
  }

  resetForm(){
    this.selected.idHistorialPaciente=undefined;
    this.selected.doctor=undefined;
    this.selected.paciente=undefined;
    this.selected.descripcion='';
    this.selected.fecha=undefined;
    this.selected.creadoPor='';
    this.selected.fechaCreacion=undefined;
    this.selected.modificadoPor='';
    this.selected.fechaModificacion=undefined;
    this.getDoctores();
    this.getPacientes();
    this.swEdit =true;
  }

}
