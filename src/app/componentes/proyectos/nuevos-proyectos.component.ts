import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { Proyectos } from 'src/app/modelos/proyectos';


@Component({
  selector: 'nuevos-proyectos',
  templateUrl: './nuevos-proyectos.component.html',
  styleUrls: ['./nuevos-proyectos.component.css']
})


export class NuevosProyectosComponent {

  formularioProyectos:FormGroup;

constructor(
  public formularioProyect: FormBuilder,
  private proyectosService:ProyectosService,
  private ruta:Router
  ){
  this.formularioProyectos = this.formularioProyect.group({
    nombre_de_proyecto:[''],
    descripcion_del_proyecto:[''],
    link_de_evidencia:[''],
    fecha_de_realizacion:['dd/MM/yyyy']
  })
}


 enviarProyectos() {
   console.log('fomulario');
   this.proyectosService.save(this.formularioProyectos.value).subscribe();
   this.ruta.navigateByUrl('/portfolio');
  }
}
