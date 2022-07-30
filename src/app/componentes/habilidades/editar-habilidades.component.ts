import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
} from '@angular/forms';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'editar-habilidad',
  templateUrl: './editar-habilidades.component.html',
  styleUrls: ['./editar-habilidades.component.css'],
})
export class EditarHabilidadComponent {
  formularioHabilidad: FormGroup;
  formId: any;

  constructor(
    private habilidadesService: HabilidadesService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private formulario: FormBuilder
  ) {
    this.formId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.formId);
    this.habilidadesService.detail(this.formId).subscribe((respuesta) => {
      console.log(respuesta);
      this.formularioHabilidad.setValue({
        porcentaje_js: respuesta['porcentaje_js'],
        porcentaje_java: respuesta['porcentaje_java'],
        porcentaje_angular: respuesta['porcentaje_angular'],
        porcentaje_mysql: respuesta['porcentaje_mysql'],
      });
    });
    this.formularioHabilidad = this.formulario.group({
      porcentaje_js: [0, [Validators.required]],
      porcentaje_java: [0, [Validators.required]],
      porcentaje_angular: [0, [Validators.required]],
      porcentaje_mysql: [0, [Validators.required]],
    });
  }
  get PorcentajeJs() {
    return this.formularioHabilidad.get('porcentaje_js');
  }
  get PorcentajeJava() {
    return this.formularioHabilidad.get('porcentaje_java');
  }
  get PorcentajeAngular() {
    return this.formularioHabilidad.get('porcentaje_angular');
  }
  get PorcentajeMysql() {
    return this.formularioHabilidad.get('porcentaje_mysql');
  }
  editarHabilidad(): void {
    this.habilidadesService
      .update(this.formId, this.formularioHabilidad.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigateByUrl('/lista');
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
