import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Banner } from 'src/app/modelos/banner';
import { BannerService } from 'src/app/servicios/banner.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'nuevo-banner',
  templateUrl: './nuevo-banner.component.html',
  styleUrls: ['./nuevo-banner.component.css']
})
export class NuevoBannerComponent  {

  formularioBanner:FormGroup;

  constructor(
    public formularioBann: FormBuilder,
    private bannerService:BannerService ,
    private ruta: Router
    ){
    this.formularioBanner = this.formularioBann.group({
      primera_descripcion:[''],
      segunda_descripcion:[''],
      tercera_descripcion:[''],
    })
  }
   enviarBanner() {
     console.log('fomulario');
     this.bannerService.save(this.formularioBanner.value).subscribe();
     this.ruta.navigateByUrl('/portfolio');
    }
}
