import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalModel } from '../../app/modelos/local.model';

@Component({
  selector: 'app-laguna-santamaria',
  templateUrl: './laguna-santamaria.component.html',
  styleUrls: ['./laguna-santamaria.component.css']
})
export class LagunaSantamariaComponent implements OnInit {
local= new LocalModel();
  constructor() { }

  ngOnInit(): void {
  }
  guardar(form:NgForm){
    console.log(form);
    console.log(this.local);

  }

}
