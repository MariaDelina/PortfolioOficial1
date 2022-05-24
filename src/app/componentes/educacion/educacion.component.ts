import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educaciones : Educacion [] =[];


  constructor(
    private educacionService: EducacionService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute
    ) {

    }

  ngOnInit() {
    this.educacionService.lista().subscribe(respuesta => {
      console.log(respuesta);
      this.educaciones = respuesta;
    })
  }
borrar(id:any, educaciones:any){
  if(window.confirm("¿Desea borrar el registro?")){
  this.educacionService.delete(id).subscribe((respuesta) => {
    this.educaciones.splice(1, educaciones)
  })
}
}

}
