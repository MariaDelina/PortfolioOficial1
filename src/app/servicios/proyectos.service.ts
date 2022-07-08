import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyectos } from '../modelos/proyectos';
@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  proyectosUrl = 'https://app-presentacion.herokuapp.com/api/proyectos/';

  constructor(private http: HttpClient) {}
  public detail(id: number): Observable<Proyectos> {
    return this.http.get<Proyectos>(this.proyectosUrl + `detail/${id}`);
  }

  public detailName(nombre_de_proyecto: string): Observable<Proyectos> {
    return this.http.get<Proyectos>(
      this.proyectosUrl + `detailname/${nombre_de_proyecto}`
    );
  }
  public lista(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(this.proyectosUrl + 'lista');
  }

  public save(proyectos: Proyectos): Observable<Proyectos> {
    return this.http.post<Proyectos>(this.proyectosUrl + 'create', proyectos);
  }

  public update(id: number, proyectos: Proyectos): Observable<Proyectos> {
    return this.http.put<Proyectos>(
      this.proyectosUrl + `update/${id}`,
      proyectos
    );
  }

  public delete(id: number): Observable<Proyectos> {
    return this.http.delete<Proyectos>(this.proyectosUrl + `delete/${id}`);
  }
}
