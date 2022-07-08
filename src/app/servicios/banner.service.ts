import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Banner } from '../modelos/banner';
@Injectable({
  providedIn: 'root',
})
export class BannerService {
  bannerUrl = 'https://app-presentacion.herokuapp.com/api/banner/';

  constructor(private http: HttpClient) {}
  public detail(id: number): Observable<Banner> {
    return this.http.get<Banner>(this.bannerUrl + `detail/${id}`);
  }

  public detailName(primera_descripcion: string): Observable<Banner> {
    return this.http.get<Banner>(
      this.bannerUrl + `detailname/${primera_descripcion}`
    );
  }
  public lista(): Observable<Banner[]> {
    return this.http.get<Banner[]>(this.bannerUrl + 'lista');
  }

  public save(banner: Banner): Observable<Banner> {
    return this.http.post<Banner>(this.bannerUrl + 'create', banner);
  }

  public update(id: number, banner: Banner): Observable<Banner> {
    return this.http.put<Banner>(this.bannerUrl + `update/${id}`, banner);
  }

  public delete(id: number): Observable<Banner> {
    return this.http.delete<Banner>(this.bannerUrl + `delete/${id}`);
  }
}
