import { Component, Inject, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Presentacion } from 'src/app/modelos/presentacion';
import { PresentacionService } from 'src/app/servicios/presentacion.service';
import { TokenService } from 'src/app/servicios/token.service';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SafePipe } from 'src/app/safe.pipe';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css'],
})
export class PresentacionComponent implements OnInit {
  presentacion: Presentacion[] = [];
  roles: string[] = [];
  github: any;
  formId: any;

  constructor(
    private presentacionService: PresentacionService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private readonly sanitizer: DomSanitizer
  ) {
    // @ts-ignore

    this.presentacion = new Array<Presetacion>(
      0,
      'nombre_y_apellido',
      'puesto',
      'github',
      'linkedin'
    );
  }

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
  goToLinkedin(): void {
    window.location.href = 'https://linkedin.com';
  }
  goToGithub(): void {
    window.location.href = 'https://Github.com';
  }
}
