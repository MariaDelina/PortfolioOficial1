import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { NuevoBannerComponent } from './componentes/banner/nuevo-banner.component';
import { EditarBannerComponent } from './componentes/banner/editar-banner.component';
import { FondoComponent } from './componentes/fondo/fondo.component';
import { NuevosProyectosComponent } from './componentes/proyectos/nuevos-proyectos.component';
import { EditarProyectosComponent } from './componentes/proyectos/editar-proyectos.component';
import { PrincipalesProyectosComponent } from './componentes/principalesproyectos/principales-proyectos.component';
import { EditarPrincipalesProyectosComponent } from './componentes/principalesproyectos/editar-principales-proyectos.component';
import { NuevosPrincipalesProyectosComponent } from './componentes/principalesproyectos/nuevo-principales-proyectos.component';
import { EditarPresentacionComponent } from './componentes/presentacion/editar-presentacion.component';
import { NuevaPresentacionComponent } from './componentes/presentacion/nueva-presentacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion.component';
import { LoginComponent } from './componentes/login/login.component';
import { interceptorProvider, ProdInterceptorService } from './interceptors/prod-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    PresentacionComponent,
    ProyectosComponent,
    BannerComponent,
    NuevoBannerComponent,
    EditarBannerComponent,
    FondoComponent,
    NuevosProyectosComponent,
    EditarProyectosComponent,
    PrincipalesProyectosComponent,
    EditarPrincipalesProyectosComponent,
    NuevosPrincipalesProyectosComponent,
    PresentacionComponent,
    EditarPresentacionComponent,
    NuevaPresentacionComponent,
    ExperienciaComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent,
    EducacionComponent,
    EditarEducacionComponent,
    NuevaEducacionComponent,
    BannerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule 
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
