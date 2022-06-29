import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PrincipalesproyectosService } from '../../servicios/principalesproyectos.service';

@Component({
  selector: 'nuevo-principales-proyectos',
  templateUrl: './nuevo-principales-proyectos.component.html',
  styleUrls: ['./nuevo-principales-proyectos.component.css'],
})
export class NuevosPrincipalesProyectosComponent {
  formularioPrincipalesProyectos: FormGroup;

  constructor(
    public formularioPrinProyect: FormBuilder,
    private principalesProyectosService: PrincipalesproyectosService,
    private ruta: Router
  ) {
    this.formularioPrincipalesProyectos = this.formularioPrinProyect.group({
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

  enviarPrincipalesProyectos() {
    console.log('fomulario');
    this.principalesProyectosService
      .save(this.formularioPrincipalesProyectos.value)
      .subscribe();
    this.ruta.navigateByUrl('/portfolio');
  }
}
