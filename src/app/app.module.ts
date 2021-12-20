import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DestinosComponent } from './destinos/destinos.component';
import { AppRoutingModule } from './app-routing.module';
import { NaturalezaComponent } from './naturaleza/naturaleza.component';
import { BlogComponent } from './blog/blog.component';
import {FormsModule}from '@angular/forms';
import { HomeGaleryComponent } from './home-galery/home-galery.component';
import { Album1Component } from './album1/album1.component';
import { SantuarioComponent } from './santuario/santuario.component';
import { PuntaMitaComponent } from './punta-mita/punta-mita.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { LugarComponent } from './lugar/lugar.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DestinosComponent,
    NaturalezaComponent,
    BlogComponent,
    HomeGaleryComponent,
    Album1Component,
    SantuarioComponent,
    PuntaMitaComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    LugarComponent,
    ContactoComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
