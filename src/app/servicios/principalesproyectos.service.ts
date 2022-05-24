import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrincipalesProyectos } from '../modelos/principales-proyectos';

@Injectable({
  providedIn: 'root'
})
export class PrincipalesproyectosService {
  principalesProyectosUrl = 'http://localhost:8080/api/principales_proyectos/';

  constructor(private http: HttpClient) {
  }
  public detail(id: number): Observable<PrincipalesProyectos> {
    return this.http.get<PrincipalesProyectos>(this.principalesProyectosUrl + `detail/${id}`);
  }

  public detailName(url_de_proyecto: string): Observable<PrincipalesProyectos> {
    return this.http.get<PrincipalesProyectos>(this.principalesProyectosUrl + `detailname/${url_de_proyecto}`);
  }
  public lista(): Observable<PrincipalesProyectos[]> {
    return this.http.get<PrincipalesProyectos[]>(this.principalesProyectosUrl + 'lista');
  }

  public save(principalesProyectos: PrincipalesProyectos): Observable<PrincipalesProyectos> {
    return this.http.post<PrincipalesProyectos>(this.principalesProyectosUrl + 'create', principalesProyectos);
  }

  public update(id:number, principalesProyectos: PrincipalesProyectos): Observable<PrincipalesProyectos> {
    return this.http.put<PrincipalesProyectos>(this.principalesProyectosUrl + `update/${id}`, principalesProyectos);
  }

  public delete(id: number): Observable<PrincipalesProyectos> {
    return this.http.delete<PrincipalesProyectos>(this.principalesProyectosUrl + `delete/${id}`);
  }
}
