import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Habilidades } from 'src/app/modelos/habilidades';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesComponent implements OnInit {
  habilidades: Habilidades[];

  constructor(
    public habilidadesService: HabilidadesService,
    private toastr: ToastrService
  ) {
    this.habilidades = new Array<Habilidades>();
  }

  ngOnInit() {
    this.habilidadesService.lista().subscribe({
      next: (data) => {
        console.log(data);
        this.habilidades = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  borrar(id: any, habilidades?: any) {
    if (window.confirm('¿Desea borrar el registro?')) {
      this.habilidadesService.delete(id).subscribe({
        next: (data) => {
          this.habilidades.splice(1, habilidades);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
  Mysql() {
    const item = this.habilidades[this.habilidades.length - 1].porcentaje_mysql;
    return item;
  }
  Js() {
    const item2 = this.habilidades[this.habilidades.length - 1].porcentaje_js;
    return item2;
  }
  Java() {
    const item3 = this.habilidades[this.habilidades.length - 1].porcentaje_java;
    return item3;
  }
  Angular() {
    const item4 =
      this.habilidades[this.habilidades.length - 1].porcentaje_angular;
    return item4;
  }
}
