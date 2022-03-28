import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DoctorInterface } from '../models/doctorInterface';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getDoctores(){
    const url_api= "http://localhost:8080/doctores";
    return this.http.get(url_api);
  }

  delete(id:any){
    const url_api= "http://localhost:8080/doctores/" + id ;
    return this.http.delete<DoctorInterface>(url_api, {headers: this.headers })
           .pipe(map(data => data));

  }
  guardar(data:any){
    const url_api= "http://localhost:8080/doctores/";
    return this.http.post<DoctorInterface>(url_api, data, {headers: this.headers })
           .pipe(map(data => data));

  }

}
