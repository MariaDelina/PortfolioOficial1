import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Banner } from 'src/app/modelos/banner';
import { BannerService } from 'src/app/servicios/banner.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  banner: Banner[] =[];


  constructor(
    private bannerService : BannerService ,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute
    ) {

    }

  ngOnInit() {
    this.bannerService.lista().subscribe(respuesta => {
      console.log(respuesta);
      this.banner=respuesta;
    })
  }
borrar(id:any, banner:any){
  if(window.confirm("¿Desea borrar el registro?")){
  this.bannerService.delete(id).subscribe((respuesta) => {
    this.banner.splice(1, banner)
  })
}
}
}