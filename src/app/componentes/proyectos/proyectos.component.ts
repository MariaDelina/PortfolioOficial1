import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/modelos/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyectos[] =[];


  constructor(
    private proyectosService: ProyectosService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute
    ) {

    }

  ngOnInit() {
    this.proyectosService.lista().subscribe(respuesta => {
      console.log(respuesta);
      this.proyectos=respuesta;
    })
  }
borrar(id:any, proyectos:any){
  if(window.confirm("¿Desea borrar el registro?")){
  this.proyectosService.delete(id).subscribe((respuesta) => {
    this.proyectos.splice(1, proyectos)
  })
}
}

}
