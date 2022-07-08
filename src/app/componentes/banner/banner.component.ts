import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Banner } from 'src/app/modelos/banner';
import { BannerService } from 'src/app/servicios/banner.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  banner: Banner[] = [];
  roles: string[] = [];
  isAdmin: boolean = false;

  constructor(
    private bannerService: BannerService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    this.bannerService.lista().subscribe({
      next: (data) => {
        console.log(data);
        this.banner = data;
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

  borrar(id: any, banner: any) {
    if (window.confirm('¿Desea borrar el registro?')) {
      this.bannerService.delete(id).subscribe({
        next: (data) => {
          this.banner.splice(1, banner);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
