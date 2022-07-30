import { NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterModule,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { BannerComponent } from './componentes/banner/banner.component';
import { NuevoBannerComponent } from './componentes/banner/nuevo-banner.component';
import { EditarBannerComponent } from './componentes/banner/editar-banner.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';
import { EditarPrincipalesProyectosComponent } from './componentes/principalesproyectos/editar-principales-proyectos.component';
import { PrincipalesProyectosComponent } from './componentes/principalesproyectos/principales-proyectos.component';
import { EditarProyectosComponent } from './componentes/proyectos/editar-proyectos.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { NuevosProyectosComponent } from './componentes/proyectos/nuevos-proyectos.component';
import { NuevosPrincipalesProyectosComponent } from './componentes/principalesproyectos/nuevo-principales-proyectos.component';
import { EditarPresentacionComponent } from './componentes/presentacion/editar-presentacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia.component';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion.component';
import { NuevaPresentacionComponent } from './componentes/presentacion/nueva-presentacion.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProdGuardService as guard } from './guards/prod-guard.service';
import { PrincipalesProyectos } from './modelos/principales-proyectos';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { NuevaHabilidadComponent } from './componentes/habilidades/nueva-habilidad.component';
import { EditarHabilidadComponent } from './componentes/habilidades/editar-habilidades.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'lista',
    component: PortfolioComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'presentacion',
    component: PresentacionComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'proyectos',
    component: ProyectosComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'banner',
    component: BannerComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'nuevo-banner',
    component: NuevoBannerComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'editar-banner/:id',
    component: EditarBannerComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },

  {
    path: 'principales-proyectos',
    component: PrincipalesProyectosComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'nuevos-principales-proyectos',
    component: NuevosPrincipalesProyectosComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'editar-principales-proyectos/:id',
    component: EditarPrincipalesProyectosComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },

  {
    path: 'nuevos-proyectos',
    component: NuevosProyectosComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'editar-proyectos/:id',
    component: EditarProyectosComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },

  {
    path: 'editar-presentacion/:id',
    component: EditarPresentacionComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'nueva-presentacion',
    component: NuevaPresentacionComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },

  {
    path: 'experiencia',
    component: ExperienciaComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'editar-experiencia/:id',
    component: EditarExperienciaComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'nueva-experiencia',
    component: NuevaExperienciaComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },

  {
    path: 'educacion',
    component: EducacionComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'editar-educacion/:id',
    component: EditarEducacionComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'nueva-educacion',
    component: NuevaEducacionComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'habilidades/:id',
    component: HabilidadesComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'nueva-habilidad',
    component: NuevaHabilidadComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'editar-habilidad/:id',
    component: EditarHabilidadComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },

  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: 'externalUrlRedirectResolver',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        window.location.href = (route.data as any).externalUrl;
      },
    },
  ],
})
export class AppRoutingModule {}
