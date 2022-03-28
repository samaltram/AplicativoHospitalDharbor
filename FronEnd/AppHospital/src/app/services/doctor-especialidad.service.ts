import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DoctorEspecialidadInterface } from '../models/doctorEspecialidad';

@Injectable({
  providedIn: 'root'
})
export class DoctorEspecialidadService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  url="http://localhost:8080/doctor-especialidad"

  constructor(private http: HttpClient) { }

  getDoctorEspecialidades(){
    const url_api= this.url;
    return this.http.get(url_api);
  }

  delete(id:any){
    const url_api= this.url + "/" +id ;
    return this.http.delete<DoctorEspecialidadInterface>(url_api, {headers: this.headers })
           .pipe(map(data => data));

  }
  guardar(data:any){
    const url_api= this.url;
    return this.http.post<DoctorEspecialidadInterface>(url_api, data, {headers: this.headers })
           .pipe(map(data => data));

  }

  getPorDoctor(id:any){
    const url_api= this.url +"/doctor/"+id;
    return this.http.get(url_api);
  }

}
