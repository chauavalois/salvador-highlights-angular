import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoticiasRegionaisComponent } from './noticias-regionais/noticias-regionais.component';
import { NoticiasNacionaisComponent } from './noticias-nacionais/noticias-nacionais.component';
import { NoticiasInternacionaisComponent } from './noticias-internacionais/noticias-internacionais.component';
import { ContatosComponent } from './contatos/contatos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'noticias-regionais', component: NoticiasRegionaisComponent},
  {path: 'noticias-nacionais', component: NoticiasNacionaisComponent},
  {path: 'noticias-internacionais', component: NoticiasInternacionaisComponent},
  {path: 'contatos', component: ContatosComponent},
  {path: 'admin', component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
