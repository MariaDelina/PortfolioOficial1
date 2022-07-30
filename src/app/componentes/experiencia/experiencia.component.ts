import { Component, OnInit, SecurityContext } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Experiencia } from 'src/app/modelos/experiencia';
import { TokenService } from 'src/app/servicios/token.service';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SafePipe } from 'src/app/safe.pipe';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[];
  constructor(
    private experienciaService: ExperienciaService,
    private activatedRoute: ActivatedRoute,
  ) {
    // @ts-ignore
    this.experiencias = new Array<Experiencia>(0, "lugar_de_trabajo", "titulo_del_puesto", "url_logo_empresa", "descripcion_de_actividades","fecha_de_actividad");
  }
  ngOnInit() {
    this.experienciaService.lista().subscribe({
      next: (data) => {
        console.log(data);
        this.experiencias = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  borrar(id: any, experiencia: any) {
    if (window.confirm('¿Desea borrar el registro?')) {
      this.experienciaService.delete(id).subscribe({
        next: (data) => {
          this.experiencias.splice(1, experiencia);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}

