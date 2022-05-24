import { Component, OnInit  } from "@angular/core";
import { BannerService } from "src/app/servicios/banner.service";
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'editar-banner',
  templateUrl: './editar-banner.component.html',
  styleUrls: ['./editar-banner.component.css']
})
export class EditarBannerComponent {
  formularioBanner:FormGroup;
  formId:any;


  constructor(
    private bannerService: BannerService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private formulario: FormBuilder
  ) {
      this.formId = this.activatedRoute.snapshot.paramMap.get('id');
      console.log(this.formId)
      this.bannerService.detail(this.formId).subscribe(
      respuesta=>{
      console.log(respuesta);
      this.formularioBanner.setValue({
        primera_descripcion:respuesta['primera_descripcion'],
        segunda_descripcion:respuesta['segunda_descripcion'],
        tercera_descripcion:respuesta['tercera_descripcion'],
      })
      }
      );
      this.formularioBanner=this.formulario.group(
        {
          primera_descripcion:[''],
          segunda_descripcion:[''],
          tercera_descripcion:[''],
        }
      );

   }

   enviarBanner():any{
     this.bannerService.update(this.formId, this.formularioBanner.value).subscribe(()=>{
      this.router.navigateByUrl('');
     })

    }

}
