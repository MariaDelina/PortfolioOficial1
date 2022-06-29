import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Educacion } from 'src/app/modelos/educacion';

@Component({
  selector: 'nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css'],
})
export class NuevaEducacionComponent {
  formularioEducacion: FormGroup;

  constructor(
    public formularioEdu: FormBuilder,
    private educacionService: EducacionService,
    private ruta: Router
  ) {
    this.formularioEducacion = this.formularioEdu.group({
      certificaciones: ['', [Validators.required]],
      info_de_instituto: ['', [Validators.required]],
      url_logo_instituto: ['', [Validators.required]],
      nombre_carrera: ['', [Validators.required]],
      desde_periodo_ano: ['dd/MM/yyyy', [Validators.required]],
      hasta_periodo_ano: ['dd/MM/yyyy', [Validators.required]],
    });
  }
  get Certificaciones() {
    return this.formularioEducacion.get('certificaciones');
  }
  get InfoDeInstituto() {
    return this.formularioEducacion.get('info_de_instituto');
  }
  get UrlLogoInstituto() {
    return this.formularioEducacion.get('url_logo_instituto');
  }
  get NombreCarrera() {
    return this.formularioEducacion.get('nombre_carrera');
  }
  get DesdePeriodoAno() {
    return this.formularioEducacion.get('desde_periodo_ano');
  }
  get HastaPeriodoAno() {
    return this.formularioEducacion.get('hasta_periodo_ano');
  }

  enviarEducacion() {
    console.log('fomulario');
    this.educacionService.save(this.formularioEducacion.value).subscribe();
    this.ruta.navigateByUrl('/portfolio');
  }
}
