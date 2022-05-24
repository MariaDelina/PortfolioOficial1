export class Proyectos{
  id?:number;
  info_de_proyectos_realizados:string;
  nombre_de_proyecto:string;
  fecha_de_realizacion:Date;
  descripcion_del_proyecto:string;
  link_de_evidencia:string;
  url_primer_proyecto_principal:string;
  url_segundo_proyecto_principal:string;



constructor (info_de_proyectos_realizados:string, nombre_de_proyecto:string, fecha_de_realizacion:Date, descripcion_del_proyecto:string, link_de_evidencia:string, url_primer_proyecto_principal:string, url_segundo_proyecto_principal:string){
        this.info_de_proyectos_realizados = info_de_proyectos_realizados;
        this.nombre_de_proyecto = nombre_de_proyecto;
        this.fecha_de_realizacion = fecha_de_realizacion;
        this.descripcion_del_proyecto = descripcion_del_proyecto;
        this.link_de_evidencia = link_de_evidencia;
        this.url_primer_proyecto_principal = url_primer_proyecto_principal;
        this.url_segundo_proyecto_principal = url_segundo_proyecto_principal;
}
}
