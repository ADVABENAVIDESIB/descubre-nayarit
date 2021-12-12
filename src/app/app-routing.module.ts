import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { DestinosComponent } from './destinos/destinos.component';
import { HomeComponent } from "./home/home.component";
import { BlogComponent } from "./blog/blog.component";
import { LagunaSantamariaComponent } from './laguna-santamaria/laguna-santamaria.component';
import { NaturalezaComponent } from './naturaleza/naturaleza.component';
import {HttpClientModule} from '@angular/common/http';


const routes:Routes=[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent},
  { path: 'destinos',component:DestinosComponent},
  { path: 'naturaleza',component:NaturalezaComponent},
  { path: 'Blog',component:BlogComponent},
  { path: 'laguna-santamaria',component:LagunaSantamariaComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
