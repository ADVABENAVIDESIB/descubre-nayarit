import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LugarModel } from '../models/lugar.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LugarService {
  
  private url = 'https://turismo-nayarit-default-rtdb.firebaseio.com';

 
  constructor(private hhtp: HttpClient) { }

  crearLugar(lugar: LugarModel){
   
    return this.hhtp.post(`${ this.url }/Lugar.json`,lugar)
    .pipe(
     map( (resp: any ) => {
       lugar.id = resp.name;
       return lugar;
     })
    );
  }

  actualizarLugar(lugar: LugarModel){
   
    const lugarTemp = {
      ...lugar
    };
   
    return this.hhtp.put(`${ this.url }/Lugar/${ lugar.id }.json`,lugar)
  
  
  }
  borrarLugar(lugar: LugarModel){
    console.log(`${ this.url }/Lugar/${ lugar.id }.json`);
    return this.hhtp.delete(`${this.url}/Lugar/${lugar.id}.json`);
  }
  
  getLugar(){
    return this.hhtp.get(`${ this.url }/Lugar.json`)
    .pipe(
    map(this.crearArreglo)
    );
  }

 

  private crearArreglo(lugarObj: any){
  const lugares: LugarModel[] = [];

  if (lugarObj  === null) {return [];}

  Object.keys(lugarObj).forEach(key =>{
    const lugar: LugarModel = lugarObj[key];
    lugar.id = key;

    lugares.push( lugar );

  });
  return lugares;
  }
}
