import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Educacion } from 'src/app/modelos/educacion';

@Component({
  selector: 'nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})


export class NuevaEducacionComponent {

  formularioEducacion:FormGroup;

constructor(
  public formularioEdu: FormBuilder,
  private educacionService:EducacionService,
  private ruta:Router
  ){
  this.formularioEducacion = this.formularioEdu.group({
    certificaciones:[''],
    info_de_instituto:[''],
    url_logo_instituto:[''],
    nombre_carrera:[''],
    desde_periodo_ano:['dd/MM/yyyy'],
    hasta_periodo_ano:['dd/MM/yyyy'],
  })
}


 enviarEducacion() {
   console.log('fomulario');
   this.educacionService.save(this.formularioEducacion.value).subscribe();
   this.ruta.navigateByUrl('/portfolio');
  }
}
