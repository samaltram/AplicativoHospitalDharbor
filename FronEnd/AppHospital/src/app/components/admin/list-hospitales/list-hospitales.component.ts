import { Observable } from 'rxjs/internal/Observable';
import { HospitalInteface } from "src/app/models/HospitalInteface";
import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/services/hospital.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { MessageBundle } from '@angular/compiler';
import { DoctorService } from 'src/app/services/doctor.service';
import { HospitalDoctorService } from 'src/app/services/hospital-doctor.service';
import { DoctorInterface } from 'src/app/models/doctorInterface';
import { HospitalDoctorInterface } from 'src/app/models/hospitaldoctorInterface';

@Component({
  selector: 'app-list-hospitales',
  templateUrl: './list-hospitales.component.html',
  styleUrls: ['./list-hospitales.component.scss'],
})

export class ListHospitalesComponent implements OnInit {

  hospitales: any;
  doctores: any;
  hospitalDoctores:any;

  constructor(
      private service: HospitalService,
      private serviceD: DoctorService,
      private serviceHD: HospitalDoctorService,
      private location :Location
    ) { }

  pageActual: number = 1;
  public myCounter: number = 0;
  pag:number =1;

  selectedHospital: HospitalInteface = {
    idHospital: undefined,
    nombre: '',
    creadoPor: '',
    fechaCreacion: undefined,
    modificadoPor: '',
    fechaModificacion: undefined
  };

  selectedD: DoctorInterface = {
    idDoctor: undefined,
    nombres: '',
    apellidos: '',
    fechaNacimiento: undefined,
    direccion: '',
    foto:'',
    creadoPor: '',
    fechaCreacion: undefined,
    modificadoPor: '',
    fechaModificacion: undefined
  };

  selectedHD :HospitalDoctorInterface={
    idDoctorEspecialidad:'',
    hospital:undefined,
    doctor:undefined,
    creadoPor: '',
    fechaCreacion: undefined,
    modificadoPor: '',
    fechaModificacion: undefined
  };

  swEdit:boolean = false;

  ngOnInit(): void {
    this.getHospitales();
    this.getDoctores();
  }

  getHospitales(){
    this.service.getHospitales().subscribe( hosp => {
      this.hospitales = hosp;
       console.log(hosp);
      });
  }

  getDoctores(){
    this.serviceD.getDoctores().subscribe( data => {
      this.doctores = data;
       console.log(data);
      });
  }

  onDelete(id:any){
    if (confirm('Esta Seguro de Borrar?')) {
      this.service.deleteHospital(id).subscribe();
    }
  }

  onSave(data:NgForm){
    if (data.valid){
      console.log(this.selectedHospital);
      this.service.guardarHospital(this.selectedHospital).subscribe(hosp => location.reload());
      this.swEdit =false;
    } else{
      alert("Los Datos no son Validos");
    }
  }

  onPreUpdate(data:any){
    this.selectedHospital = Object.assign({}, data);
    this.serviceHD.getPorHospital(this.selectedHospital.idHospital).subscribe(data =>{
      this.hospitalDoctores = data;
    });

    this.swEdit =true;
  }
  addDoctor(frmSelDoc:NgForm){
    console.log(frmSelDoc);
    this.selectedHD.doctor = this.selectedD;
    this.selectedHD.hospital = this.selectedHospital;
    this.serviceHD.guardar(this.selectedHD).subscribe(data => {
      if (data){
        this.serviceHD.getPorHospital(this.selectedHospital.idHospital).subscribe(data =>{
          this.hospitalDoctores = data;
        });
      }
    });
  }

  delDoctor(data:any){
    if (confirm('Esta Seguro de Borrar?')) {
      this.serviceHD.delete(data.idHospitalDoctor).subscribe(data=>{
        if (data){
          this.serviceHD.getPorHospital(this.selectedHospital.idHospital).subscribe(data =>{
            this.hospitalDoctores = data;
          });
        }
      });
    }
  }

  resetForm(){
    this.selectedHospital.idHospital=undefined;
    this.selectedHospital.nombre='';
    this.selectedHospital.creadoPor='';
    this.selectedHospital.fechaCreacion=undefined;
    this.selectedHospital.modificadoPor='';
    this.selectedHospital.fechaModificacion=undefined;
    this.swEdit =true;
  }

  onSalir(){
    this.swEdit = false;
  }

}
