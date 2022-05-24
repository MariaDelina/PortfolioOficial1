import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Experiencia } from 'src/app/modelos/experiencia';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencias : Experiencia [] =[];


  constructor(
    private experienciaService: ExperienciaService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute
    ) {

    }

  ngOnInit() {
    this.experienciaService.lista().subscribe(respuesta => {
      console.log(respuesta);
      this.experiencias=respuesta;
    })
  }
borrar(id:any, experiencia:any){
  if(window.confirm("¿Desea borrar el registro?")){
  this.experienciaService.delete(id).subscribe((respuesta) => {
    this.experiencias.splice(1, experiencia)
  })
}
}
}