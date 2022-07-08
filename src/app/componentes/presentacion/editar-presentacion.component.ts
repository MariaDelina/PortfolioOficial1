import { Component, OnInit } from '@angular/core';
import { Presentacion } from 'src/app/modelos/presentacion';
import { PresentacionService } from 'src/app/servicios/presentacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private toastr: ToastrService,
    private router: Router,
    private formulario: FormBuilder
  ) {
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
      nombre_y_apellido: ['', [Validators.required]],
      puesto: ['', [Validators.required]],
    });
  }
  get NombreYApellido() {
    return this.formularioPresentacion.get('nombre_y_apellido');
  }
  get Puesto() {
    return this.formularioPresentacion.get('puesto');
  }
  enviarPresentacion(): any {
    this.presentacionService
      .update(this.formId, this.formularioPresentacion.value)
      .subscribe(() => {
        this.router.navigateByUrl('lista');
      });
  }
}
