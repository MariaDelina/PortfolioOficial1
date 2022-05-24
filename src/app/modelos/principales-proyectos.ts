export class PrincipalesProyectos{
  id?:number;
  url_primer_proyecto_principal:string;
  url_segundo_proyecto_principal:string;

  constructor(url_primer_proyecto_principal:string, url_segundo_proyecto_principal:string){
    this.url_primer_proyecto_principal=url_primer_proyecto_principal;
    this.url_segundo_proyecto_principal=url_segundo_proyecto_principal;
  }
}
