import { Component, OnInit  } from "@angular/core";
import { EducacionService } from '../../servicios/educacion.service'
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Educacion } from "src/app/modelos/educacion";

@Component({
  selector: 'editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent {
  formularioEducacion:FormGroup;
  formId:any;


  constructor(
    private educacionService: EducacionService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private formulario: FormBuilder
  ) {
      this.formId = this.activatedRoute.snapshot.paramMap.get('id');
      console.log(this.formId)
      this.educacionService.detail(this.formId).subscribe(
      respuesta=>{
      console.log(respuesta);
      this.formularioEducacion.setValue({
        certificaciones:respuesta['certificaciones'],
        info_de_instituto:respuesta['info_de_instituto'],
        url_logo_instituto:respuesta['url_logo_instituto'],
        nombre_carrera:respuesta['nombre_carrera'],
        desde_periodo_ano:respuesta['desde_periodo_ano'],
        hasta_periodo_ano:respuesta['hasta_periodo_ano']
      })
      }
      );
      this.formularioEducacion=this.formulario.group(
        {
          certificaciones:[''],
          info_de_instituto:[''],
          url_logo_instituto:[''],
          nombre_carrera:[''],
          desde_periodo_ano:[''],
          hasta_periodo_ano:[''],
        }
      );

   }

   editarEducacion():any{
     this.educacionService.update(this.formId, this.formularioEducacion.value).subscribe(()=>{
      this.router.navigateByUrl('/portfolio');
     })

    }

}
