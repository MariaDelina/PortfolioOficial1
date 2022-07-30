import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/modelos/habilidades';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'nueva-habilidad',
  templateUrl: './nueva-habilidad.component.html',
  styleUrls: ['./nueva-habilidad.component.css'],
})
export class NuevaHabilidadComponent {
  formularioHabilidades: FormGroup;
  habilidades: Habilidades[] = [];

  constructor(
    public formularioHab: FormBuilder,
    public habilidadesService: HabilidadesService,
    private activatedRoute: ActivatedRoute,
    private ruta: Router
  ) {
    this.habilidades = new Array<Habilidades>();

    this.formularioHabilidades = this.formularioHab.group({
      porcentaje_js: [0, [Validators.required]],
      porcentaje_java: [0, [Validators.required]],
      porcentaje_angular: [0, [Validators.required]],
      porcentaje_mysql: [0, [Validators.required]],
    });
  }
  get PorcentajeJs() {
    return this.formularioHabilidades.get('porcentaje_js');
  }
  get PorcentajeJava() {
    return this.formularioHabilidades.get('porcentaje_java');
  }
  get PorcentajeAngular() {
    return this.formularioHabilidades.get('porcentaje_angular');
  }
  get PorcentajeMysql() {
    return this.formularioHabilidades.get('porcentaje_mysql');
  }
  enviarHabilidad() {
    this.habilidadesService.save(this.formularioHabilidades.value).subscribe();
    this.ruta.navigateByUrl('/lista');
  }
}
