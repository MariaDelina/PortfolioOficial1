import { Component, OnInit } from '@angular/core';
import { PresentacionService } from 'src/app/servicios/presentacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'editar-presentacion',
  templateUrl: './editar-presentacion.component.html',
  styleUrls: ['./editar-presentacion.component.css'],
})
export class EditarPresentacionComponent {
  formularioPresentacion: FormGroup;
  formId: any;

  constructor(
    private presentacionService: PresentacionService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formulario: FormBuilder
  ) {
    // @ts-ignore
    this.presentacion = new Array<Presetacion>(
      0,
      'nombre_y_apellido',
      'puesto',
      'github',
      'linkedin'
    );
    this.formId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.formId);
    this.presentacionService.detail(this.formId).subscribe((respuesta) => {
      console.log(respuesta);
      this.formularioPresentacion.setValue({
        nombre_y_apellido: respuesta['nombre_y_apellido'],
        puesto: respuesta['puesto'],
      });
    });
    this.formularioPresentacion = this.formulario.group({
      nombre_y_apellido: [''],
      puesto: [''],
    });
  }
  get NombreYApellido() {
    return this.formularioPresentacion.get('nombre_y_apellido');
  }
  get Puesto() {
    return this.formularioPresentacion.get('puesto');
  }
  enviarPresentacion(): void {
    this.presentacionService
      .update(this.formId, this.formularioPresentacion.value)
      .subscribe(() => {
        this.router.navigateByUrl('/lista');
      });
  }
}
