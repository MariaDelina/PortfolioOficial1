import { Component, OnInit } from '@angular/core';
import { EducacionService } from '../../servicios/educacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
} from '@angular/forms';
import { Educacion } from 'src/app/modelos/educacion';

@Component({
  selector: 'editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css'],
})
export class EditarEducacionComponent {
  formularioEducacion: FormGroup;
  formId: any;
  // @ts-ignore
  selectCampo: Educacion = new Educacion();

  constructor(
    private educacionService: EducacionService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private formulario: FormBuilder
  ) {
    this.formId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.formId);
    this.educacionService.detail(this.formId).subscribe((respuesta) => {
      console.log(respuesta);
      this.formularioEducacion.setValue({
        certificaciones: respuesta['certificaciones'],
        info_de_instituto: respuesta['info_de_instituto'],
        url_logo_instituto: respuesta['url_logo_instituto'],
        nombre_carrera: respuesta['nombre_carrera'],
        desde_periodo_ano: respuesta['desde_periodo_ano'],
        hasta_periodo_ano: respuesta['hasta_periodo_ano'],
      });
    });
    this.formularioEducacion = this.formulario.group({
      certificaciones: ['', [Validators.required]],
      info_de_instituto: ['', [Validators.required]],
      url_logo_instituto: ['', [Validators.required]],
      nombre_carrera: ['', [Validators.required]],
      desde_periodo_ano: ['', [Validators.required]],
      hasta_periodo_ano: ['', [Validators.required]],
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
  editarEducacion(): void {
    this.educacionService
      .update(this.formId, this.formularioEducacion.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          //(this.formId === res.id);
          this.router.navigateByUrl('/lista');
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}

// addorEdit(){
// this.selectCampo = this.formularioEducacion.length + 1;
//this.formularioEducacion.value.push(this.selectCampo);
// @ts-ignore
//this.selectCampo = new Educacion();
// }

//(this.InfoDeInstituto, this.Certificaciones,this.InfoDeInstituto, this.UrlLogoInstituto, this.NombreCarrera ,this.DesdePeriodoAno, this.HastaPeriodoAno

//[(ngModel)]="selectCampo.certificaciones"
//
