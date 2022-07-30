import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Experiencia } from 'src/app/modelos/experiencia';

@Component({
  selector: 'nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css'],
})
export class NuevaExperienciaComponent {
  formularioExperiencia: FormGroup;
  activatedRoute: any;
  experiencia:Experiencia[]=[];
  constructor(
    public formularioExp: FormBuilder,
    private experienciaService: ExperienciaService,
    private ruta: Router,
  ) {
    // @ts-ignore
    this.experiencia = new Array<Experiencia>(0, "lugar_de_trabajo", "titulo_del_puesto", "url_logo_empresa", "descripcion_de_actividades","fecha_de_actividad");
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
