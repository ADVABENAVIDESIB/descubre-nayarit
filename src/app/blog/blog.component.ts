import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogModel } from '../models/blogs.model';
import { BlogService } from '../services/blog.service';
import { Categoria } from '../models/Interface';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [DataService]
})
export class BlogComponent implements OnInit {

  public SelectedCategory: Categoria={id: 0, nombre: ''};
  public categorias!: Categoria[];

  blog = new BlogModel();
  constructor( private blogService: BlogService, 
    private dataSvc: DataService) { }

  ngOnInit(): void {
    this.categorias = this.dataSvc.getCategoria();
  }

  

  guardar (form: NgForm){

    if (form.invalid){
      console.log("Formulario no válido");
      return;
    }

    this.blogService.crearBlog(this.blog)
    .subscribe( resp => {
    console.log(resp);
    })
  }


}
