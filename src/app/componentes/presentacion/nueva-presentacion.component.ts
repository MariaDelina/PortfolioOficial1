import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PresentacionService } from 'src/app/servicios/presentacion.service';


@Component({
  selector: 'nueva-presentacion',
  templateUrl: './nueva-presentacion.component.html',
  styleUrls: ['./nueva-presentacion.component.css']
})


export class NuevaPresentacionComponent {

  formularioPresentacion:FormGroup;

constructor(
  public formularioPres: FormBuilder,
  private presentacionService:PresentacionService ,
  private ruta:Router
  ){
  this.formularioPresentacion = this.formularioPres.group({
    nombre_y_apellido:[''],
    puesto:[''],
  })
}


 enviarPresentacion() {
   console.log('fomulario');
   this.presentacionService.save(this.formularioPresentacion.value).subscribe();
   this.ruta.navigateByUrl('/portfolio');
  }
}
