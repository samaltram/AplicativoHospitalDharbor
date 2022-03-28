import { HospitalInteface } from '../models/HospitalInteface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getHospitales(){
    const url_api= "http://localhost:8080/hospital";
    return this.http.get(url_api);
  }

  deleteHospital(id:any){
    const url_api= "http://localhost:8080/hospital/" + id ;
    return this.http.delete<HospitalInteface>(url_api, {headers: this.headers })
           .pipe(map(data => data));

  }
  guardarHospital(data:any){
    const url_api= "http://localhost:8080/hospital/";
    return this.http.post<HospitalInteface>(url_api, data, {headers: this.headers })
           .pipe(map(data => data));

  }

}
