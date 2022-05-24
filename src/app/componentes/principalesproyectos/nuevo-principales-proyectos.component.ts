import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PrincipalesproyectosService } from '../../servicios/principalesproyectos.service'



@Component({
  selector: 'nuevo-principales-proyectos',
  templateUrl: './nuevo-principales-proyectos.component.html',
  styleUrls: ['./nuevo-principales-proyectos.component.css']
})


export class NuevosPrincipalesProyectosComponent {

  formularioprincipalesProyectos:FormGroup;

constructor(
  public formularioPrinProyect: FormBuilder,
  private principalesProyectosService:PrincipalesproyectosService ,
  private ruta:Router
  ){
  this.formularioprincipalesProyectos = this.formularioPrinProyect.group({
    url_primer_proyecto_principal:[''],
    url_segundo_proyecto_principal:[''],
  })
}


 enviarPrincipalesProyectos() {
   console.log('fomulario');
   this.principalesProyectosService.save(this.formularioprincipalesProyectos.value).subscribe();
   this.ruta.navigateByUrl('/portfolio');
  }
}
