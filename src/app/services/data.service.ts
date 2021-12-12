import { Injectable } from '@angular/core';
import { Categoria } from '../models/Interface';

@Injectable()

export class DataService {
  private categorias : Categoria[] = [
    {
      id:1,
      nombre:'Playa'
    },
    {
      id:2,
      nombre:'Restaurant'
    },
    {
      id:3,
      nombre:'Experiencias'
    }
  ];
 getCategoria(): Categoria[]{
  return this.categorias
 }

}
