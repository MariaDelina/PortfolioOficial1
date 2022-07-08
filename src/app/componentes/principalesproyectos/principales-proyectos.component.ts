import { Component, OnInit } from '@angular/core';
import { PrincipalesProyectos } from '../../modelos/principales-proyectos';
import { PrincipalesproyectosService } from 'src/app/servicios/principalesproyectos.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-principales-proyectos',
  templateUrl: './principales-proyectos.component.html',
  styleUrls: ['./principales-proyectos.component.css'],
})
export class PrincipalesProyectosComponent implements OnInit {
  prinProyectos: PrincipalesProyectos[] = [];
  roles: string[] = [];
  isAdmin: boolean = false;

  constructor(
    private principalesproyectosService: PrincipalesproyectosService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private tokenService: TokenService
  ) {}

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
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach( rol => {
      if(rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    })
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
