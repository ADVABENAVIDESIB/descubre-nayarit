import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DestinosComponent } from './destinos/destinos.component';
import { AppRoutingModule } from './app-routing.module';
import { NaturalezaComponent } from './naturaleza/naturaleza.component';
import { LagunaSantamariaComponent } from './laguna-santamaria/laguna-santamaria.component';
import { BlogComponent } from './blog/blog.component';
import {FormsModule}from '@angular/forms';
import { HomeGaleryComponent } from './home-galery/home-galery.component';
import { Album1Component } from './album1/album1.component';
import { CabaniasComponent } from './cabanias/cabanias.component';
import { LagunaMoraComponent } from './laguna-mora/laguna-mora.component';
import { IslasMarietasComponent } from './islas-marietas/islas-marietas.component';
import { SantuarioComponent } from './santuario/santuario.component';
import { PuntaMitaComponent } from './punta-mita/punta-mita.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DestinosComponent,
    NaturalezaComponent,
    LagunaSantamariaComponent,
    BlogComponent,
    HomeGaleryComponent,
    Album1Component,
    CabaniasComponent,
    LagunaMoraComponent,
    IslasMarietasComponent,
    SantuarioComponent,
    PuntaMitaComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
