
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NoticiasRegionaisComponent } from './noticias-regionais/noticias-regionais.component';
import { NoticiasNacionaisComponent } from './noticias-nacionais/noticias-nacionais.component';
import { NoticiasInternacionaisComponent } from './noticias-internacionais/noticias-internacionais.component';
import { ContatosComponent } from './contatos/contatos.component';
import { EditarNoticiaComponent } from './admin/editar-noticia/editar-noticia.component';
import { CriarNoticiaComponent } from './admin/criar-noticia/criar-noticia.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'noticias-regionais', component: NoticiasRegionaisComponent},
  {path: 'noticias-nacionais', component: NoticiasNacionaisComponent},
  {path: 'noticias-internacionais', component: NoticiasInternacionaisComponent},
  {path: 'contatos', component: ContatosComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'criar-noticia', component: EditarNoticiaComponent},
  {path: 'editar-noticia', component: EditarNoticiaComponent},
  {path: 'editar-noticia/:id', component: EditarNoticiaComponent},
  {path: 'login', component: LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
