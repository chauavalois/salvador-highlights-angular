import { HtmlParser } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ContatosComponent } from './contatos/contatos.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditAboutComponent } from './edit-about/edit-about.component';
import { EditHomeComponent } from './edit-home/edit-home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatosComponent,
    HeaderComponent,
    FooterComponent,
    AdminDashboardComponent,
    LoginComponent,
    RegisterComponent,
    NoticiasComponent,
    UserListComponent,
    EditAboutComponent,
    EditHomeComponent,
    AboutComponent
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
