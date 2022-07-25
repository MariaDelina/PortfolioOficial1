import { Injectable } from '@angular/core';
import { LoginUsuario } from 'src/app/modelos/login-usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtDTO } from 'src/app/modelos/JwtDTO';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authURL = 'https://app-portfoliov3.herokuapp.com/auth/';

  constructor(private http: HttpClient) {}

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.http.post<JwtDTO>(this.authURL + 'login', loginUsuario);
  }
}
