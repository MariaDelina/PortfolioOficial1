import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Banner } from 'src/app/modelos/banner';
import { BannerService } from 'src/app/servicios/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit{
  // @ts-ignore
  banner: Banner[] = [];

  constructor(
    private bannerService: BannerService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
  ) {
    // @ts-ignore
    this.banner = new Array<Banner>(0, "primera_descripcion", "segunda_descripcion", "tercera_descripcion");
  }

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
  }
}

