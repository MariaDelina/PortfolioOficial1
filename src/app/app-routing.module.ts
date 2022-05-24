import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './componentes/banner/banner.component';
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
import { NuevoBannerComponent } from './componentes/banner/nuevo-banner.component';
import { EditarBannerComponent } from './componentes/banner/editar-banner.component';
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion.component';
import { NuevaPresentacionComponent } from './componentes/presentacion/nueva-presentacion.component';
import { LoginComponent } from './componentes/login/login.component';


const routes: Routes = [
  {path: '',component:PortfolioComponent},
  {path: 'presentacion', component:PresentacionComponent},
  {path: 'proyectos',component:ProyectosComponent},
  {path: 'banner', component:BannerComponent},
  {path: 'nuevo-banner', component:NuevoBannerComponent},
  {path: 'editar-banner/:id', component:EditarBannerComponent},
  {path: 'login', component:LoginComponent},

  {path: 'principales-proyectos', component:PrincipalesProyectosComponent},
  {path: 'nuevos-principales-proyectos', component:NuevosPrincipalesProyectosComponent},
  {path: 'editar-principales-proyectos/:id', component:EditarPrincipalesProyectosComponent},

  {path: 'nuevos-proyectos',component:NuevosProyectosComponent},
  {path: 'editar-proyectos/:id',component:EditarProyectosComponent},

  {path: 'editar-presentacion/:id', component:EditarPresentacionComponent},
  {path: 'nueva-presentacion', component:NuevaPresentacionComponent},

  {path: 'experiencia', component:ExperienciaComponent},
  {path: 'editar-experiencia/:id', component:EditarExperienciaComponent},
  {path: 'nueva-experiencia', component:NuevaExperienciaComponent},

  {path: 'educacion', component:EducacionComponent},
  {path: 'editar-educacion/:id', component:EditarEducacionComponent},
  {path: 'nueva-educacion', component:NuevaEducacionComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
