import { Component, OnInit } from '@angular/core';
import { PrincipalesProyectos } from '../../modelos/principales-proyectos';
import { PrincipalesproyectosService } from 'src/app/servicios/principalesproyectos.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-principales-proyectos',
  templateUrl: './principales-proyectos.component.html',
  styleUrls: ['./principales-proyectos.component.css']
})
export class PrincipalesProyectosComponent implements OnInit {

  prinProyectos: PrincipalesProyectos[] =[];


  constructor(
    private principalesproyectosService : PrincipalesproyectosService ,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute
    ) {

    }

  ngOnInit() {
    this.principalesproyectosService.lista().subscribe(respuesta => {
      console.log(respuesta);
      this.prinProyectos=respuesta;
    })
  }
borrar(id:any, proyectos:any){
  if(window.confirm("¿Desea borrar el registro?")){
  this.principalesproyectosService.delete(id).subscribe((respuesta) => {
    this.prinProyectos.splice(1, proyectos)
  })
}
}

}
