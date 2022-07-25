import { Component, OnInit } from '@angular/core';
import { PrincipalesProyectos } from 'src/app/modelos/principales-proyectos';
import { PrincipalesproyectosService } from '../../servicios/principalesproyectos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'editar-principales-proyectos',
  templateUrl: './editar-principales-proyectos.component.html',
  styleUrls: ['./editar-principales-proyectos.component.css'],
})
export class EditarPrincipalesProyectosComponent {
  formularioPrincipalesProyectos: FormGroup;
  formId: any;

  constructor(
    private principalesProyectosService: PrincipalesproyectosService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private formulario: FormBuilder
  ) {
    this.formId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.formId);
    this.principalesProyectosService
      .detail(this.formId)
      .subscribe((respuesta) => {
        console.log(respuesta);
        this.formularioPrincipalesProyectos.setValue({
          url_primer_proyecto_principal:
            respuesta['url_primer_proyecto_principal'],
          url_segundo_proyecto_principal:
            respuesta['url_segundo_proyecto_principal'],
        });
      });
    this.formularioPrincipalesProyectos = this.formulario.group({
      url_primer_proyecto_principal: ['', [Validators.required]],
      url_segundo_proyecto_principal: ['', [Validators.required]],
    });
  }
  get UrlPrimerProyectoPrincipal() {
    return this.formularioPrincipalesProyectos.get(
      'url_primer_proyecto_principal'
    );
  }
  get UrlSegundoProyectoPrincipal() {
    return this.formularioPrincipalesProyectos.get(
      'url_segundo_proyecto_principal'
    );
  }
  enviarUrl(): void {
    this.principalesProyectosService
      .update(this.formId, this.formularioPrincipalesProyectos.value)
      .subscribe(() => {
        this.router.navigateByUrl('lista');
      });
  }
}
