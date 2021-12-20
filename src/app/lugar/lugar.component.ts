import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LugarModel } from '../models/lugar.model';
import { LugarService } from '../services/lugar.service';
import Swal from 'sweetalert2';
import { Observable, ObservableInput } from 'rxjs';



@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.css'],
})
export class LugarComponent implements OnInit {
  
  lugares: LugarModel[] = [];


  lugar = new LugarModel();
  constructor( private lugarService: LugarService) { }

  ngOnInit(): void {
    this.lugarService.getLugar()
    .subscribe( resp => this.lugares = resp)
    
  }
  editar(i: number){
    const lugarTemp = this.lugares[i];
    this.lugarService.actualizarLugar(this.lugares[i]).subscribe(
      res => {
        Swal.fire({
          title: 'Puede Actualizar',
          text: 'Mofique los campos del lugar: ' + lugarTemp.nombre,
          icon: 'success'
        });
        console.log(res);
        this.lugarService.getLugar()
        .subscribe(res => {
          this.lugares = res
          console.log(res)
        });
      }
    )

  }

  borrar (i: number){
    const lugarTemp = this.lugares[i];
    this.lugarService.borrarLugar(this.lugares[i]).subscribe(
      res => {
        Swal.fire({
          title: 'Eliminación exitosa',
          text: 'Se ha borrado el lugar: ' + lugarTemp.nombre,
          icon: 'success'
        });
        console.log(res);
        this.lugarService.getLugar()
        .subscribe(res => {
          this.lugares = res
          console.log(res)
        });
      }
    )
  }

  guardar (form: NgForm){

    if (form.invalid){
      console.log("Formulario no válido");
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando Información',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if (this.lugar.id){
    peticion = this.lugarService.actualizarLugar(this.lugar);
   }else{
    peticion = this.lugarService.crearLugar(this.lugar);
    }
    peticion.subscribe( 
      res =>{
      Swal.fire({
        title: this.lugar.nombre,
        text: 'Se actualizó correctamente',
        icon: 'success',
      });
      console.log(res);
      this.lugarService.getLugar()
      .subscribe(res => {
        this.lugares = res
        console.log(res)
      });
    }
    );
    
   
  }


}
