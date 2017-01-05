import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { WordpressService } from '../wordpress.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogrollComponent {

posts$: any;
  randomPost$: any;
  constructor(private http: Http, private wpService: WordpressService) {
    this.posts$ = this.wpService.getAll();
  }


  ngOnInit() {
    console.log('hello `Blog` component');
  }

}
