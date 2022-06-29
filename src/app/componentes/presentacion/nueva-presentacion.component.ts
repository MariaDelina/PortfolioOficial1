import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PresentacionService } from 'src/app/servicios/presentacion.service';

@Component({
  selector: 'nueva-presentacion',
  templateUrl: './nueva-presentacion.component.html',
  styleUrls: ['./nueva-presentacion.component.css'],
})
export class NuevaPresentacionComponent {
  formularioPresentacion: FormGroup;

  constructor(
    public formularioPres: FormBuilder,
    private presentacionService: PresentacionService,
    private ruta: Router
  ) {
    this.formularioPresentacion = this.formularioPres.group({
      nombre_y_apellido: ['', [Validators.required]],
      puesto: ['', [Validators.required]],
    });
  }
  get NombreYApellido() {
    return this.formularioPresentacion.get('nombre_y_apellido');
  }
  get Puesto() {
    return this.formularioPresentacion.get('puestol');
  }

  enviarPresentacion() {
    console.log('fomulario');
    this.presentacionService
      .save(this.formularioPresentacion.value)
      .subscribe();
    this.ruta.navigateByUrl('/portfolio');
  }
}
