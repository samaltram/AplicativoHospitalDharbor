import { DoctorEspecialidadInterface } from './../../../models/doctorEspecialidad';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorInterface } from 'src/app/models/doctorInterface';
import { DoctorService } from 'src/app/services/doctor.service';
import { Location } from '@angular/common';
import { DoctorEspecialidadService } from 'src/app/services/doctor-especialidad.service';
import { EspecialidadService } from 'src/app/services/especialidad.service';
import { EspecialidadIntefase } from 'src/app/models/EspecialidadInterface';

@Component({
  selector: 'app-list-doctores',
  templateUrl: './list-doctores.component.html',
  styleUrls: ['./list-doctores.component.scss']
})
export class ListDoctoresComponent implements OnInit {

  doctores: any;
  especialidades:any;
  doctoresEspecialidad:any;

  constructor(
      private service: DoctorService,
      private serviceEs: EspecialidadService,
      private serviceDE: DoctorEspecialidadService,
      private location :Location
    ) { }

  pageActual: number = 1;
  public myCounter: number = 0;
  pag:number =1;

  selected: DoctorInterface = {
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

  selectedDE :DoctorEspecialidadInterface={
    idDoctorEspecialidad:'',
    doctor:undefined,
    especialidad:undefined,
    creadoPor: '',
    fechaCreacion: undefined,
    modificadoPor: '',
    fechaModificacion: undefined
  };

  selectedE:EspecialidadIntefase={
    idEspecialidad:'',
    nombre:'',
    descripcion:'',
    icono:'',
    creadoPor:'',
    fechaCreacion:undefined,
    modificadoPor:'',
    fechaModificacion:undefined
  }

  swEdit:boolean = false;

  ngOnInit(): void {
    this.getDoctores();
    this.getEspecialidad();
  }

  getDoctores(){
    this.service.getDoctores().subscribe( data => {
      this.doctores = data;
       console.log(data);
      });
  }

  getEspecialidad(){
    this.serviceEs.getEspecialidades().subscribe( data => {
      this.especialidades = data;
       console.log(data);
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
    this.serviceDE.getPorDoctor(this.selected.idDoctor).subscribe(data =>{
      this.doctoresEspecialidad = data;
    });
    this.swEdit =true;
  }

  onSelecionEsp(e:any)  {
    console.log(e.target.value);
    this.selectedE = Object.assign({}, e.target.value);
    console.log(this.selectedE);
  }

  addEspecialidad(frmSelEspe:NgForm){
    console.log(frmSelEspe);
    this.selectedDE.doctor = this.selected;
    this.selectedDE.especialidad = this.selectedE;
    this.serviceDE.guardar(this.selectedDE).subscribe(data => {
      if (data){
        this.serviceDE.getPorDoctor(this.selected.idDoctor).subscribe(data =>{
          this.doctoresEspecialidad = data;
        });
      }
    });
  }

  delEspecialidad(data:any){
    if (confirm('Esta Seguro de Borrar?')) {
      this.serviceDE.delete(data.idDoctorEspecialidad).subscribe(data=>{
        if (data){
          this.serviceDE.getPorDoctor(this.selected.idDoctor).subscribe(data =>{
            this.doctoresEspecialidad = data;
          });
        }
      });
    }
  }

  resetForm(){
    this.selected.idDoctor=undefined;
    this.selected.nombres='';
    this.selected.fechaNacimiento=undefined;
    this.selected.direccion='';
    this.selected.foto='';
    this.selected.creadoPor='';
    this.selected.fechaCreacion=undefined;
    this.selected.modificadoPor='';
    this.selected.fechaModificacion=undefined;
    this.swEdit =true;
  }

}
