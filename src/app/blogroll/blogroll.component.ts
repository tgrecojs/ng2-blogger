import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { BlogService } from '../shared/blog/blog.service';
import { Post } from './post';
import * as _ from 'lodash';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs';


@Component({
  selector: 'sd-blog',
  styleUrls : ['blogroll.component.css'],
  template: `
  <div id="full-page">
  <div id="search-box">
    <label>
      Search posts
    </label>
    <input placeholder="CSS, JavaScript, etc." (input)="term$.next($event.target.value)">
  </div>
    <div id="blog-card-wrapper" class="content" *ngFor="let b of bloggerPosts">
    <h3 [innerHtml]="b.title"></h3>
    <button class="button">
      <a [routerLink]="[b.id]">
        Read Full Post
      </a>
    </button>
   </div>
  </div>
  `
})




export class BlogrollComponent implements OnInit {
 bloggerPosts;
  randomPost$: any;
  term$ = new Subject<string>();
  focusedPost = false;
  constructor(private http: Http, private wpService: BlogService) {
  this.wpService.getAll()
      .subscribe(res => this.bloggerPosts = res);

 this.term$
        .debounceTime(400)
        .distinctUntilChanged()
        .flatMap(term => this.wpService.search(term))
        .subscribe(res => this.bloggerPosts = res);
  }

  search (term: string) {
  this.wpService.search(term)
          .subscribe(results => this.bloggerPosts = results);
  }


  ngOnInit() {
    console.log('hello `Blog` component');
  }


}
