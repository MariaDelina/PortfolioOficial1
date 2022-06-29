export class Presentacion {
  id?: number;
  nombre_y_apellido: string;
  puesto: string;
  linkedin: string;
  github: string;

  constructor(
    nombre_y_apellido: string,
    puesto: string,
    linkedin: string,
    github: string
  ) {
    this.nombre_y_apellido = nombre_y_apellido;
    this.puesto = puesto;
    this.linkedin = linkedin;
    this.github = github;
  }
}
