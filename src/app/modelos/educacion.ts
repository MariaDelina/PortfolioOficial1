export class Educacion {
  id?: number;
  certificaciones: string;
  info_de_instituto: string;
  url_logo_instituto: string;
  nombre_carrera: string;
  desde_periodo_ano: Date;
  hasta_periodo_ano: Date;

  constructor(
    certificaciones: string,
    info_de_instituto: string,
    url_logo_instituto: string,
    nombre_carrera: string,
    desde_periodo_ano: Date,
    hasta_periodo_ano: Date
  ) {
    this.certificaciones = certificaciones;
    this.info_de_instituto = info_de_instituto;
    this.url_logo_instituto = url_logo_instituto;
    this.nombre_carrera = nombre_carrera;
    this.desde_periodo_ano = desde_periodo_ano;
    this.hasta_periodo_ano = hasta_periodo_ano;
  }
}
