import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { DestinosComponent } from './destinos/destinos.component';
import { HomeComponent } from "./home/home.component";
import { LagunaSantamariaComponent } from './laguna-santamaria/laguna-santamaria.component';
import { NaturalezaComponent } from './naturaleza/naturaleza.component';
import { HomeGaleryComponent } from './home-galery/home-galery.component';
import { Album1Component } from './album1/album1.component';
import { CabaniasComponent } from './cabanias/cabanias.component';
import { IslasMarietasComponent } from './islas-marietas/islas-marietas.component';
import { LagunaMoraComponent } from './laguna-mora/laguna-mora.component';
import { PuntaMitaComponent } from './punta-mita/punta-mita.component';
import { SantuarioComponent } from './santuario/santuario.component';

const routes:Routes=[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent},
  { path: 'destinos',component:DestinosComponent},
  { path: 'naturaleza',component:NaturalezaComponent},
  { path: 'laguna-santamaria',component:LagunaSantamariaComponent},
  { path: 'home-galery',component:HomeGaleryComponent},
  { path: 'album1',component:Album1Component},

  { path: 'cabanias',component:CabaniasComponent},
  { path: 'islas-marietas',component:IslasMarietasComponent},
  { path: 'laguna-mora',component:LagunaMoraComponent},
  { path: 'punta-mita',component:PuntaMitaComponent},
  { path: 'santuario',component:SantuarioComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
