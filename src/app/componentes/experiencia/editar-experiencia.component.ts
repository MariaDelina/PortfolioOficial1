import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css'],
})
export class EditarExperienciaComponent {
  formularioExperiencia: FormGroup;
  formId: any;

  constructor(
    private experienciaService: ExperienciaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private formulario: FormBuilder
  ) {
    this.formId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.formId);
    this.experienciaService.detail(this.formId).subscribe({
      next: (data) => {
        console.log(data);
        this.formularioExperiencia.setValue({
          lugar_de_trabajo: data['lugar_de_trabajo'],
          titulo_del_puesto: data['titulo_del_puesto'],
          url_logo_empresa: data['url_logo_empresa'],
          descripcion_de_actividades: data['descripcion_de_actividades'],
          fecha_de_actividad: data['fecha_de_actividad'],
        });
      },
    });
    this.formularioExperiencia = this.formulario.group({
      lugar_de_trabajo: ['', [Validators.required]],
      titulo_del_puesto: ['', [Validators.required]],
      url_logo_empresa: ['', [Validators.required]],
      descripcion_de_actividades: ['', [Validators.required]],
      fecha_de_actividad: ['', [Validators.required]],
    });
  }
  get LugarDeTrabajo() {
    return this.formularioExperiencia.get('lugar_de_trabajo');
  }
  get TituloDelPuesto() {
    return this.formularioExperiencia.get('titulo_del_puesto');
  }
  get UrlLogoEmpresa() {
    return this.formularioExperiencia.get('url_logo_empresa');
  }
  get DescripcionDeActividades() {
    return this.formularioExperiencia.get('descripcion_de_actividades');
  }
  get FechaDeActividad() {
    return this.formularioExperiencia.get('fecha_de_actividad');
  }
  cambiarExperiencia(): any {
    this.experienciaService
      .update(this.formId, this.formularioExperiencia.value)
      .subscribe(() => {
        this.router.navigateByUrl('/lista');
      });
  }
}
