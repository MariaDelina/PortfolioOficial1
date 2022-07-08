import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css'],
})
export class NuevaExperienciaComponent {
  formularioExperiencia: FormGroup;

  constructor(
    public formularioExp: FormBuilder,
    private experienciaService: ExperienciaService,
    private ruta: Router
  ) {
    this.formularioExperiencia = this.formularioExp.group({
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
  enviarExperiencia() {
    console.log('fomulario');
    this.experienciaService.save(this.formularioExperiencia.value).subscribe();
    this.ruta.navigateByUrl('/lista');
  }
}
