import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PresentacionService } from 'src/app/servicios/presentacion.service';
import { Presentacion } from 'src/app/modelos/presentacion';

@Component({
  selector: 'nueva-presentacion',
  templateUrl: './nueva-presentacion.component.html',
  styleUrls: ['./nueva-presentacion.component.css'],
})
export class NuevaPresentacionComponent {
  formularioPresentacion: FormGroup;
  presentacion: Presentacion[] = [];
  constructor(
    public formularioPres: FormBuilder,
    private presentacionService: PresentacionService,
    private ruta: Router
  ) {
    // @ts-ignore
    this.presentacion = new Array<Presetacion>(0, 'nombre_y_apellido', 'puesto', 'github', 'linkedin');
    this.formularioPresentacion = this.formularioPres.group({
      nombre_y_apellido: ['', [Validators.required]],
      puesto: ['', [Validators.required]],
      github: ['', [Validators.required]],
      linkedin: ['', [Validators.required]],
    });
  }
  get NombreYApellido() {
    return this.formularioPresentacion.get('nombre_y_apellido');
  }
  get Puesto() {
    return this.formularioPresentacion.get('puesto');
  }
  get Github() {
    return this.formularioPresentacion.get('github');
  }
  get Linkedin() {
    return this.formularioPresentacion.get('linkedin');
  }

  enviarPresentacion() {
    console.log('fomulario');
    this.presentacionService
      .save(this.formularioPresentacion.value)
      .subscribe();
    this.ruta.navigateByUrl('/lista');
  }
}
