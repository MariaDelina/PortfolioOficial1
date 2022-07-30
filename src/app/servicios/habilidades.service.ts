import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from '../modelos/habilidades';

@Injectable({
  providedIn: 'root',
})
export class HabilidadesService {
  habilidadesURL = '  https://app-portfoliov5.herokuapp.com/api/habilidades/';

  constructor(private httpClient: HttpClient) {}

  public detail(id: string): Observable<Habilidades> {
    return this.httpClient.get<Habilidades>(
      this.habilidadesURL + `detail/${id}`
    );
  }

  public detailName(
    descripcion_de_caracteristicas_personales: string
  ): Observable<Habilidades> {
    return this.httpClient.get<Habilidades>(
      this.habilidadesURL +
        `detailname/${descripcion_de_caracteristicas_personales}`
    );
  }
  public lista(): Observable<Habilidades[]> {
    return this.httpClient.get<Habilidades[]>(this.habilidadesURL + 'lista');
  }

  public save(habilidades: Habilidades): Observable<Habilidades> {
    return this.httpClient.post<Habilidades>(
      this.habilidadesURL + 'create',
      habilidades
    );
  }

  public update(id: string, habilidades: Habilidades): Observable<Habilidades> {
    return this.httpClient.put<Habilidades>(
      this.habilidadesURL + `update/${id}`,
      habilidades
    );
  }

  public delete(id: string): Observable<Habilidades> {
    return this.httpClient.delete<Habilidades>(
      this.habilidadesURL + `delete/${id}`
    );
  }
}
