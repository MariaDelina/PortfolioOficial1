import { Component, OnInit  } from "@angular/core";
import { Experiencia } from "src/app/modelos/experiencia";
import { ExperienciaService } from "src/app/servicios/experiencia.service";
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent {
  formularioExperiencia:FormGroup;
  formId:any;


  constructor(
    private experienciaService: ExperienciaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private formulario: FormBuilder
  ) {
      this.formId = this.activatedRoute.snapshot.paramMap.get('id');
      console.log(this.formId)
      this.experienciaService.detail(this.formId).subscribe(
      respuesta=>{
      console.log(respuesta);
      this.formularioExperiencia.setValue({
        lugar_de_trabajo:respuesta['lugar_de_trabajo'],
        titulo_del_puesto:respuesta['titulo_del_puesto'],
        url_logo_empresa:respuesta['url_logo_empresa'],
        descripcion_de_actividades:respuesta['descripcion_de_actividades']
      })
      }
      );
      this.formularioExperiencia = this.formulario.group(
        {
          lugar_de_trabajo:[''],
          titulo_del_puesto:[''],
          url_logo_empresa:[''],
          descripcion_de_actividades:[''],
        }
      );

   }

   enviarExperiencia():any{
     this.experienciaService.update(this.formId, this.formularioExperiencia.value).subscribe(()=>{
      this.router.navigateByUrl('');
     })

    }

}
