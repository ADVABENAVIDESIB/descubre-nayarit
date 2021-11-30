import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DestinosComponent } from './destinos/destinos.component';
import { AppRoutingModule } from './app-routing.module';
import { NaturalezaComponent } from './naturaleza/naturaleza.component';
import { LagunaSantamariaComponent } from './laguna-santamaria/laguna-santamaria.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DestinosComponent,
    NaturalezaComponent,
    LagunaSantamariaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
