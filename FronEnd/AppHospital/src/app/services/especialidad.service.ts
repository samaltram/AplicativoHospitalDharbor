import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

import { EspecialidadIntefase } from '../models/EspecialidadInterface';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

headers: HttpHeaders = new HttpHeaders({
  'Content-Type': 'application/json'
});

constructor(private http: HttpClient) { }

getEspecialidades(){
  const url_api= "http://localhost:8080/especialidad";
  return this.http.get(url_api);
}

delete(id:any){
  const url_api= "http://localhost:8080/especialidad/" + id ;
  return this.http.delete<EspecialidadIntefase>(url_api, {headers: this.headers })
         .pipe(map(data => data));

}
guardar(data:any){
  const url_api= "http://localhost:8080/especialidad/";
  return this.http.post<EspecialidadIntefase>(url_api, data, {headers: this.headers })
         .pipe(map(data => data));

}
}