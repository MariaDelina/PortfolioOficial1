import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../modelos/educacion';
@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  educacionUrl = 'http://localhost:8080/api/educacion/';

  constructor(private http: HttpClient) {
  }
  public detail(id: number): Observable<Educacion> {
    return this.http.get<Educacion>(this.educacionUrl + `detail/${id}`);
  }

  public detailName(nombre_carrera: string): Observable<Educacion> {
    return this.http.get<Educacion>(this.educacionUrl + `detailname/${nombre_carrera}`);
  }
  public lista(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.educacionUrl+ 'lista');
  }

  public save(educacion: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(this.educacionUrl + 'create', educacion);
  }

  public update(id:number, educacion: Educacion): Observable<Educacion> {
    return this.http.put<Educacion>(this.educacionUrl + `update/${id}`, educacion);
  }

  public delete(id: number): Observable<Educacion> {
    return this.http.delete<Educacion>(this.educacionUrl + `delete/${id}`);
  }
}
