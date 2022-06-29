import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Presentacion } from 'src/app/modelos/presentacion';
import { PresentacionService } from 'src/app/servicios/presentacion.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css'],
})
export class PresentacionComponent implements OnInit {
  presentacion: Presentacion[] = [];

  constructor(
    private presentacionService: PresentacionService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.presentacionService.lista().subscribe({
      next: (data) => {
        console.log(data);
        this.presentacion = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  borrar(id: any, presentacion: any) {
    if (window.confirm('¿Desea borrar el registro?')) {
      this.presentacionService.delete(id).subscribe({
        next: (data) => {
          this.presentacion.splice(1, presentacion);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
