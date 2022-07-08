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
  isAdmin: boolean = false;

  constructor(
    private proyectosService: ProyectosService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private tokenService: TokenService
  ) {}

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
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach( rol => {
      if(rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    })
  }
  borrar(id: any, proyectos: any) {
    if (window.confirm('¿Desea borrar el registro?')) {
      this.proyectosService.delete(id).subscribe((respuesta) => {
        this.proyectos.splice(1, proyectos);
      });
    }
  }
}
