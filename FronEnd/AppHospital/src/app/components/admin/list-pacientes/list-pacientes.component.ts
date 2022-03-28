import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PacienteInterface } from 'src/app/models/pacienteInterface';
import { PacienteService } from 'src/app/services/paciente.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-pacientes',
  templateUrl: './list-pacientes.component.html',
  styleUrls: ['./list-pacientes.component.scss']
})
export class ListPacientesComponent implements OnInit {

  pacientes: any;
  constructor(
      private service: PacienteService,
      private location :Location
    ) { }

  pageActual: number = 1;
  public myCounter: number = 0;
  pag:number =1;

  selected: PacienteInterface = {
    idPaciente: undefined,
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

  swEdit:boolean = false;

  ngOnInit(): void {
    this.getPacientes();
  }

  getPacientes(){
    this.service.getPaciente().subscribe( data => {
      this.pacientes = data;
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
    this.swEdit =true;
  }

  resetForm(){
    this.selected.idPaciente=undefined;
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
