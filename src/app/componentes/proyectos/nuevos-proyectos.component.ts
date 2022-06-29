import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { Proyectos } from 'src/app/modelos/proyectos';

@Component({
  selector: 'nuevos-proyectos',
  templateUrl: './nuevos-proyectos.component.html',
  styleUrls: ['./nuevos-proyectos.component.css'],
})
export class NuevosProyectosComponent {
  formularioProyectos: FormGroup;

  constructor(
    public formularioProyect: FormBuilder,
    private proyectosService: ProyectosService,
    private ruta: Router
  ) {
    this.formularioProyectos = this.formularioProyect.group({
      nombre_de_proyecto: ['', [Validators.required]],
      descripcion_del_proyecto: ['', [Validators.required]],
      link_de_evidencia: ['', [Validators.required]],
      fecha_de_realizacion: ['dd/MM/yyyy', [Validators.required]],
    });
  }
  get NombreDeProyecto() {
    return this.formularioProyectos.get('nombre_de_proyecto');
  }
  get DescripcionDelProyecto() {
    return this.formularioProyectos.get('descripcion_del_proyecto');
  }
  get LinkDeEvidencia() {
    return this.formularioProyectos.get('link_de_evidencia');
  }
  get FechaDeRealizacion() {
    return this.formularioProyectos.get('fecha_de_realizacion');
  }

  enviarProyectos() {
    console.log('fomulario');
    this.proyectosService.save(this.formularioProyectos.value).subscribe();
    this.ruta.navigateByUrl('/portfolio');
  }
}
