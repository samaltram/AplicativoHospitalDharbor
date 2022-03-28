import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { MessageBundle } from '@angular/compiler';

import { EspecialidadService } from 'src/app/services/especialidad.service';
import { EspecialidadIntefase } from 'src/app/models/EspecialidadInterface';



@Component({
  selector: 'app-list-especialidades',
  templateUrl: './list-especialidades.component.html',
  styleUrls: ['./list-especialidades.component.scss']
})
export class ListEspecialidadesComponent implements OnInit {

  especialidades: any;
  constructor(
      private service: EspecialidadService,
      private location :Location
    ) { }

  pageActual: number = 1;
  public myCounter: number = 0;
  pag:number =1;

  selected: EspecialidadIntefase = {
    idEspecialidad: undefined,
    nombre: '',
    descripcion:'',
    icono:'',
    creadoPor: '',
    fechaCreacion: undefined,
    modificadoPor: '',
    fechaModificacion: undefined
  };

  swEdit:boolean = false;

  ngOnInit(): void {
    this.getEspecialidades();
  }

  getEspecialidades(){
    this.service.getEspecialidades().subscribe( data => {
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
    this.swEdit =true;
  }

  resetForm(){
    this.selected.idEspecialidad=undefined;
    this.selected.nombre='';
    this.selected.descripcion='';
    this.selected.icono='';
    this.selected.creadoPor='';
    this.selected.fechaCreacion=undefined;
    this.selected.modificadoPor='';
    this.selected.fechaModificacion=undefined;
    this.swEdit =true;
  }



}
