import { HtmlParser } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NoticiasRegionaisComponent } from './noticias-regionais/noticias-regionais.component';
import { NoticiasNacionaisComponent } from './noticias-nacionais/noticias-nacionais.component';
import { NoticiasInternacionaisComponent } from './noticias-internacionais/noticias-internacionais.component';
import { ContatosComponent } from './contatos/contatos.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { CriarNoticiaComponent } from './admin/criar-noticia/criar-noticia.component';
import { EditarNoticiaComponent } from './admin/editar-noticia/editar-noticia.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiasRegionaisComponent,
    NoticiasNacionaisComponent,
    NoticiasInternacionaisComponent,
    ContatosComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    CriarNoticiaComponent,
    EditarNoticiaComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
