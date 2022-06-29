export class Banner {
  id?: number;
  primera_descripcion: string;
  segunda_descripcion: string;
  tercera_descripcion: string;

  constructor(
    primera_descripcion: string,
    segunda_descripcion: string,
    tercera_descripcion: string
  ) {
    this.primera_descripcion = primera_descripcion;
    this.segunda_descripcion = segunda_descripcion;
    this.tercera_descripcion = tercera_descripcion;
  }
}
