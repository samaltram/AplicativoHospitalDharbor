import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HistorialPactienteInterface } from '../models/historiaPaciente';

@Injectable({
  providedIn: 'root'
})
export class HistoriaPacienteService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  url="http://localhost:8080/historia-paciente"

  constructor(private http: HttpClient) { }

  getHistoriaPaciente(){
    const url_api= this.url;
    return this.http.get(url_api);
  }

  delete(id:any){
    const url_api= this.url + "/" +id ;
    return this.http.delete<HistorialPactienteInterface>(url_api, {headers: this.headers })
           .pipe(map(data => data));

  }
  guardar(data:any){
    const url_api= this.url;
    return this.http.post<HistorialPactienteInterface>(url_api, data, {headers: this.headers })
           .pipe(map(data => data));

  }

  getPorDoctor(id:any){
    const url_api= this.url +"/doctor/"+id;
    return this.http.get(url_api);
  }

  getPorPaciente(id:any){
    const url_api= this.url +"/paciente/"+id;
    return this.http.get(url_api);
  }
}
