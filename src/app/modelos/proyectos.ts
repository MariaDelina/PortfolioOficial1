export class Proyectos {
  id?: number;
  nombre_de_proyecto: string;
  fecha_de_realizacion: Date;
  descripcion_del_proyecto: string;
  link_de_evidencia: string;

  constructor(
    nombre_de_proyecto: string,
    fecha_de_realizacion: Date,
    descripcion_del_proyecto: string,
    link_de_evidencia: string,
  ) {
    this.nombre_de_proyecto = nombre_de_proyecto;
    this.fecha_de_realizacion = fecha_de_realizacion;
    this.descripcion_del_proyecto = descripcion_del_proyecto;
    this.link_de_evidencia = link_de_evidencia;
  }
}
