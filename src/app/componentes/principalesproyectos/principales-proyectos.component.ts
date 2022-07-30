import { Component, OnInit } from '@angular/core';
import { PrincipalesProyectos } from '../../modelos/principales-proyectos';
import { PrincipalesproyectosService } from 'src/app/servicios/principalesproyectos.service';


@Component({
  selector: 'app-principales-proyectos',
  templateUrl: './principales-proyectos.component.html',
  styleUrls: ['./principales-proyectos.component.css'],
})
export class PrincipalesProyectosComponent implements OnInit {

  prinProyectos: PrincipalesProyectos[] = [];
  roles: string[] = [];
  url: any;

  constructor(
    private principalesproyectosService: PrincipalesproyectosService,
  ) {
    // @ts-ignore
    this.prinProyectos = new Array<PrincipalesProyectos>(0, "url_primer_proyecto_principal", "url_segundo_proyecto_principal");
  }

  ngOnInit() {
    this.principalesproyectosService.lista().subscribe({
      next: (data) => {
        console.log(data);
        this.prinProyectos = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  borrar(id: any, proyectos: any) {
    if (window.confirm('¿Desea borrar el registro?')) {
      this.principalesproyectosService.delete(id).subscribe({
        next: (data) => {
          this.prinProyectos.splice(1, proyectos);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}

