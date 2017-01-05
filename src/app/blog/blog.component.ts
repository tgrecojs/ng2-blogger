import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { WordpressService } from '../wordpress.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

 posts$: any;
  randomPost$: any;
  blogUrl = 'http://54.209.113.46/wp-json/wp/v2/posts';
  focusedPost = false;
randomPostUrl = `${this.blogUrl}?filter[orderby]=rand&filter[posts_per_page]=1`;
  constructor(private http: Http, private wpService: WordpressService) {
    //this.posts$ = this.wpService.getAll();
    this.posts$ = this.wpService.getAllJson();
}



  ngOnInit() {
    console.log('hello `Blog` component');
  }

}
