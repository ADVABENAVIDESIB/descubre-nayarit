import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DestinosComponent } from './destinos/destinos.component';
import { AppRoutingModule } from './app-routing.module';
import { NaturalezaComponent } from './naturaleza/naturaleza.component';
import { LagunaSantamariaComponent } from './laguna-santamaria/laguna-santamaria.component';

import {FormsModule}from '@angular/forms';
import { HomeGaleryComponent } from './home-galery/home-galery.component';
import { Album1Component } from './album1/album1.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DestinosComponent,
    NaturalezaComponent,
    LagunaSantamariaComponent,
    HomeGaleryComponent,
    Album1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
