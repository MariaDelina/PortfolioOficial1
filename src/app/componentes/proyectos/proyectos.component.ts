import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/modelos/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyectos[] = [];
  roles: string[] = [];


  constructor(
    private proyectosService: ProyectosService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
  ) {
    // @ts-ignore
    this.proyectos = new Array<Proyectos>(0, "nombre_de_proyecto", "descripcion_del_proyecto", "link_de_evidencia", "fecha_de_realizacion");
  }

  ngOnInit() {
    this.proyectosService.lista().subscribe({
      next: (data) => {
        console.log(data);
        this.proyectos = data;
      },
      error: (err: Error) => {
        console.log(err);
      },
    });
  }
  borrar(id: any, proyectos: any) {
    if (window.confirm('¿Desea borrar el registro?')) {
      this.proyectosService.delete(id).subscribe((respuesta) => {
        this.proyectos.splice(1, proyectos);
      });
    }
  }
}
