import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  educaciones: Educacion[] = [];
  roles: string[] = [];
  isAdmin: boolean = false;

  constructor(
    private educacionService: EducacionService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    this.educacionService.lista().subscribe({
      next: (data) => {
        console.log(data);
        this.educaciones = data;
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
  borrar(id: any, educaciones: any) {
    if (window.confirm('¿Desea borrar el registro?')) {
      this.educacionService.delete(id).subscribe({
        next: (data) => {
          this.educaciones.splice(1, educaciones);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
