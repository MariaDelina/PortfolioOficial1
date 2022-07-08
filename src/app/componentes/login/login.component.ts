import { Component, ErrorHandler, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { LoginUsuario} from 'src/app/modelos/login-usuario';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  loginUsuario: LoginUsuario;
  nombreUsuario: string = '';
  password: string = '';
  roles: string[] = [];
  err: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService
  ){
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
  }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin():void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe({
     next:data => {
        this.isLogged = true;
        this.isLoginFail = false;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['lista']);
    },
        error:(err:Error) => {
        this.isLogged = false;
        this.isLoginFail = true;
        console.error(err);
        }

});
}

}



