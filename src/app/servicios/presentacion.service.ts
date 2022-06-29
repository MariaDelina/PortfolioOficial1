import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Presentacion } from '../modelos/presentacion';
@Injectable({
  providedIn: 'root',
})
export class PresentacionService {
  presentacionUrl = 'http://localhost:8080/api/presentacion/';

  constructor(private http: HttpClient) {}
  public detail(id: number): Observable<Presentacion> {
    return this.http.get<Presentacion>(this.presentacionUrl + `detail/${id}`);
  }

  public detailName(nombre_y_apellido: string): Observable<Presentacion> {
    return this.http.get<Presentacion>(
      this.presentacionUrl + `detailname/${nombre_y_apellido}`
    );
  }
  public lista(): Observable<Presentacion[]> {
    return this.http.get<Presentacion[]>(this.presentacionUrl + 'lista');
  }

  public save(presentacion: Presentacion): Observable<Presentacion> {
    return this.http.post<Presentacion>(
      this.presentacionUrl + 'create',
      presentacion
    );
  }

  public update(
    id: number,
    presentacion: Presentacion
  ): Observable<Presentacion> {
    return this.http.put<Presentacion>(
      this.presentacionUrl + `update/${id}`,
      presentacion
    );
  }

  public delete(id: number): Observable<Presentacion> {
    return this.http.delete<Presentacion>(
      this.presentacionUrl + `delete/${id}`
    );
  }
}
