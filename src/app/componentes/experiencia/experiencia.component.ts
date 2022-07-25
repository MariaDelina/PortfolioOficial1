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
  itsSafe: SafeHtml | undefined;
  experiencias: Experiencia[];
  roles: string[] = [];
  formUrl:any;
  formularioExperiencia: FormGroup;
  file: any;
  private safePipe = new SafePipe(this.domSanitizer);
  img: any;
  canvas: any;
  uploadService: any;
  asset: any;
  constructor(
    private experienciaService: ExperienciaService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    public  domSanitizer: DomSanitizer,
    private formularioExp: FormBuilder,

  ) {
    // @ts-ignore
    this.experiencias = new Array<Experiencia>(0, "lugar_de_trabajo", "titulo_del_puesto", "url_logo_empresa", "descripcion_de_actividades","fecha_de_actividad");
    this.formularioExperiencia = this.formularioExp.group({
      lugar_de_trabajo: ['', [Validators.required]],
      titulo_del_puesto: ['', [Validators.required]],
      url_logo_empresa: ['', [Validators.required]],
      descripcion_de_actividades: ['', [Validators.required]],
      fecha_de_actividad: ['', [Validators.required]],
    });
  }
  get LugarDeTrabajo() {
    return this.formularioExperiencia.get('lugar_de_trabajo');
  }
  get TituloDelPuesto() {
    return this.formularioExperiencia.get('titulo_del_puesto');
  }
  get UrlLogoEmpresa() {
    return this.formularioExperiencia.get('url_logo_empresa');
  }
  get DescripcionDeActividades() {
    return this.formularioExperiencia.get('descripcion_de_actividades');
  }
  get FechaDeActividad() {
    return this.formularioExperiencia.get('fecha_de_actividad');
  }
  ngOnInit() {
    this.itsSafe = this.safePipe.transform('<h1>Hi</h1>', 'html');
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
  public getSantizeUrl(url : any) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

