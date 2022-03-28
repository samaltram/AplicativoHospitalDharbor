import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { PacienteInterface } from '../models/pacienteInterface';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  
  constructor(private http: HttpClient) { }
  
  getPaciente(){
    const url_api= "http://localhost:8080/paciente";
    return this.http.get(url_api);
  }
  
  delete(id:any){
    const url_api= "http://localhost:8080/paciente/" + id ;
    return this.http.delete<PacienteInterface>(url_api, {headers: this.headers })
           .pipe(map(data => data));
  
  }
  guardar(data:any){
    const url_api= "http://localhost:8080/paciente";
    return this.http.post<PacienteInterface>(url_api, data, {headers: this.headers })
           .pipe(map(data => data));
  
  }
}
