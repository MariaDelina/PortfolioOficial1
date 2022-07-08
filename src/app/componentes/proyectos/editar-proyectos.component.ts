import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/modelos/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css'],
})
export class EditarProyectosComponent {
  formularioProyectos: FormGroup;
  formId: any;

  constructor(
    private proyectosService: ProyectosService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private formulario: FormBuilder
  ) {
    this.formId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.formId);
    this.proyectosService.detail(this.formId).subscribe((respuesta) => {
      console.log(respuesta);
      this.formularioProyectos.setValue({
        nombre_de_proyecto: respuesta['nombre_de_proyecto'],
        descripcion_del_proyecto: respuesta['descripcion_del_proyecto'],
        link_de_evidencia: respuesta['link_de_evidencia'],
        fecha_de_realizacion: respuesta['fecha_de_realizacion'],
      });
    });
    this.formularioProyectos = this.formulario.group({
      nombre_de_proyecto: ['', [Validators.required]],
      descripcion_del_proyecto: ['', [Validators.required]],
      link_de_evidencia: ['', [Validators.required]],
      fecha_de_realizacion: ['', [Validators.required]],
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

  enviarProyectos(): any {
    this.proyectosService
      .update(this.formId, this.formularioProyectos.value)
      .subscribe(() => {
        this.router.navigateByUrl('lista');
      });
  }
}
