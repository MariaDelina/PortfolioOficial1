import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelos/experiencia';
@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  experienciaUrl = 'https://app-portfoliov5.herokuapp.com/api/experiencia/';

  constructor(private http: HttpClient) {}
  public detail(id: number): Observable<Experiencia> {
    return this.http.get<Experiencia>(this.experienciaUrl + `detail/${id}`);
  }

  public detailName(lugar_de_trabajo: string): Observable<Experiencia> {
    return this.http.get<Experiencia>(
      this.experienciaUrl + `detailname/${lugar_de_trabajo}`
    );
  }
  public lista(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.experienciaUrl + 'lista');
  }

  public save(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(
      this.experienciaUrl + 'create',
      experiencia
    );
  }

  public update(id: number, experiencia: Experiencia): Observable<Experiencia> {
    return this.http.put<Experiencia>(
      this.experienciaUrl + `update/${id}`,
      experiencia
    );
  }

  public delete(id: number): Observable<Experiencia> {
    return this.http.delete<Experiencia>(this.experienciaUrl + `delete/${id}`);
  }
}
