export class JwtDTO {
  token: any;
  type: string;
  nombreUsuario: string;
  authorities: any[];

constructor(token: any, type: string, nombreUsuario: string, authorities: any[]){
  this.token=token;
  this.type=type;
  this.nombreUsuario=nombreUsuario;
  this.authorities=authorities;
}
}
