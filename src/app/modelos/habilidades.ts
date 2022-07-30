export class Habilidades {
  id?: number;
  porcentaje_js: number;
  porcentaje_java: number;
  porcentaje_angular: number;
  porcentaje_mysql: number;

  constructor(
    porcentaje_js: number,
    porcentaje_java: number,
    porcentaje_angular: number,
    porcentaje_mysql: number
  ) {
    this.porcentaje_js = porcentaje_js;
    this.porcentaje_java = porcentaje_java;
    this.porcentaje_angular = porcentaje_angular;
    this.porcentaje_mysql = porcentaje_mysql;
  }
}
