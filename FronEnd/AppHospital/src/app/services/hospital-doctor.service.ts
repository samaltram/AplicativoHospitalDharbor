import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HospitalDoctorInterface } from '../models/hospitaldoctorInterface';

@Injectable({
  providedIn: 'root'
})
export class HospitalDoctorService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  url="http://localhost:8080/hospital-doctor"

  constructor(private http: HttpClient) { }

  getDoctorEspecialidades(){
    const url_api= this.url;
    return this.http.get(url_api);
  }

  delete(id:any){
    const url_api= this.url + "/" +id ;
    return this.http.delete<HospitalDoctorInterface>(url_api, {headers: this.headers })
           .pipe(map(data => data));

  }
  guardar(data:any){
    const url_api= this.url;
    return this.http.post<HospitalDoctorInterface>(url_api, data, {headers: this.headers })
           .pipe(map(data => data));

  }

  getPorHospital(id:any){
    const url_api= this.url +"/hospital/"+id;
    return this.http.get(url_api);
  }
}
