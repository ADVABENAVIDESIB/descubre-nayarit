import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
@Component({
  selector: 'app-album1',
  templateUrl: './album1.component.html',
  styleUrls: ['./album1.component.css']
})
export class Album1Component implements OnInit {

  constructor( ) {
  }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

 
 
}
