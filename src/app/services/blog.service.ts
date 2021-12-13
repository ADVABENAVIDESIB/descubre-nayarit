import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogModel } from '../models/blogs.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  
  private url = 'https://turismo-nayarit-default-rtdb.firebaseio.com';

 
  constructor(private hhtp: HttpClient) { }

  crearBlog(blog: BlogModel){
   
    return this.hhtp.post(`${ this.url }/Blog.json`,blog)
    .pipe(
     map( (resp: any ) => {
       blog.id = resp.name;
       return blog;
     })
    );
  }

  actualizarBlog(blog: BlogModel){
   
    const blogTemp = {
      ...blog
    };
    delete blogTemp.id;

    return this.hhtp.put(`${ this.url }/Blog/${ blog.id }.json`,blog);
  
  }
  
  getBlogs(){
    return this.hhtp.get(`${ this.url }/Blog.json`)
    .pipe(
    map(this.crearArreglo)
    );
  }

  private crearArreglo(blogObj: any){
  const blogs: BlogModel[] = [];

  if (blogObj  === null) {return [];}

  Object.keys(blogObj).forEach(key =>{
    const blog: BlogModel = blogObj[key];
    blog.id = key;

    blogs.push( blog );

  });
  return blogs;
  }
}
