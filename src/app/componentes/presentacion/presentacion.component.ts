import { Component, Inject, OnInit } from '@angular/core';
import { Presentacion } from 'src/app/modelos/presentacion';
import { PresentacionService } from 'src/app/servicios/presentacion.service';
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
  photoSelected: any;
  file:any;

  constructor(
    private presentacionService: PresentacionService
  ) {
    // @ts-ignore
    this.presentacion = new Array<Presetacion>(0, 'nombre_y_apellido', 'puesto', 'github', 'linkedin');
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
  mostrarImg(event:any):void {
    if(event.target.files && event.target.files[0]){
      this.file = <any>event.target.files[0];
      //img preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file)
    }

  }
}
