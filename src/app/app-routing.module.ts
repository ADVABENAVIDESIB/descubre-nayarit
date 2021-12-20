import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { DestinosComponent } from './destinos/destinos.component';
import { HomeComponent } from "./home/home.component";
import { BlogComponent } from "./blog/blog.component";
import { NaturalezaComponent } from './naturaleza/naturaleza.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeGaleryComponent } from './home-galery/home-galery.component';
import { Album1Component } from './album1/album1.component';
import { PuntaMitaComponent } from './punta-mita/punta-mita.component';
import { SantuarioComponent } from './santuario/santuario.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LugarComponent } from "./lugar/lugar.component";

const routes:Routes=[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent},
  { path: 'destinos',component:DestinosComponent},
  { path: 'naturaleza',component:NaturalezaComponent},
  { path: 'Blog',component:BlogComponent},
  { path: 'home-galery',component:HomeGaleryComponent},
  { path: 'album1',component:Album1Component},
  { path: 'punta-mita',component:PuntaMitaComponent},
  { path: 'login',component:LoginComponent},
  { path: 'register',component:RegisterComponent},  
  { path: 'santuario',component:SantuarioComponent},
  { path: 'lugar',component:LugarComponent},
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
