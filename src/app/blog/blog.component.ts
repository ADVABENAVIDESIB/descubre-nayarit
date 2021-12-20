import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogModel } from '../models/blogs.model';
import { BlogService } from '../services/blog.service';
import { Categoria } from '../models/Interface';
import { DataService } from '../services/data.service';
import Swal from 'sweetalert2';
import { Observable, ObservableInput } from 'rxjs';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [DataService]
})
export class BlogComponent implements OnInit {
  
  blogs: BlogModel[] = [];

  public SelectedCategory: Categoria={id: 0, nombre: ''};
  public categorias!: Categoria[];

  blog = new BlogModel();
  constructor( private blogService: BlogService, 
    private dataSvc: DataService) { }

  ngOnInit(): void {
    this.blogService.getBlogs()
    .subscribe( resp => this.blogs = resp)
    
  }
  editar(i: number){
    const blogTemp = this.blogs[i];
    this.blogService.actualizarBlog(this.blogs[i]).subscribe(
      res => {
        Swal.fire({
          title: 'Puede Actualizar',
          text: 'Mofique los campos del blog: ' + blogTemp.titulo,
          icon: 'success'
        });
        console.log(res);
        this.blogService.getBlogs()
        .subscribe(res => {
          this.blogs = res
          console.log(res)
        });
      }
    )

  }

  borrar (i: number){
    const blogTemp = this.blogs[i];
    this.blogService.borrarBlog(this.blogs[i]).subscribe(
      res => {
        Swal.fire({
          title: 'Eliminación exitosa',
          text: 'Se ha borrado el blog: ' + blogTemp.autor,
          icon: 'success'
        });
        console.log(res);
        this.blogService.getBlogs()
        .subscribe(res => {
          this.blogs = res
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

    if (this.blog.id){
    peticion = this.blogService.actualizarBlog(this.blog);
   }else{
    peticion = this.blogService.crearBlog(this.blog);
    }
    peticion.subscribe( 
      res =>{
      Swal.fire({
        title: this.blog.titulo,
        text: 'Se actualizó correctamente',
        icon: 'success',
      });
      console.log(res);
      this.blogService.getBlogs()
      .subscribe(res => {
        this.blogs = res
        console.log(res)
      });
    }
    );
    
   
  }


}