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
  
}
