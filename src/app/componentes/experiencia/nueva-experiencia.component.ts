import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';


@Component({
  selector: 'nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})


export class NuevaExperienciaComponent {

  formularioExperiencia:FormGroup;

constructor(
  public formularioExp: FormBuilder,
  private experienciaService:ExperienciaService,
  private ruta:Router
  ){
  this.formularioExperiencia = this.formularioExp.group({
    lugar_de_trabajo:[''],
    titulo_del_puesto:[''],
    url_logo_empresa:[''],
    descripcion_de_actividades:['']
  })
}

 enviarExperiencia() {
   console.log('fomulario');
   this.experienciaService.save(this.formularioExperiencia.value).subscribe();
   this.ruta.navigateByUrl('/portfolio');
  }


}
