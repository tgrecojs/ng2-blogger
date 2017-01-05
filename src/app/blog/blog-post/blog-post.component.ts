import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import { WordpressService } from '../../wordpress.service';

@Component({
  selector: 'app-blog-post',
   styles: [`
    #blog-post-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
  #blog-post {
          width: 80%;
  }
  code {
  z-index: -1;
}
pre {
    z-index: 1;
    background: black;
    padding: 1em;
    /// box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color];
    box-shadow: 2px 2px 0 4px $text-color;
}
#backBtn {
      margin-bottom: 20px;
}
  `],
  template: `
  Lazy blog post - async: 
  <div id='blog-post-wrapper'>
  <h3>{{ (post$ | async)?.title.rendered }}</h3>
  <div id='blog-post'>
  <p innerHtml='{{ (post$ | async)?.content.rendered }}'>
  </p>
 </div>
      <button id='backBtn' (click)='goBack()'> Back to blog home</button>
</div>
  `
})
export class BlogPostComponent {

 randomPost$:any;
    post$:any;
    comments$:any;
    slug: any;
    postId : number;
    private blogUrl = '54.209.113.46/wp-json/wp/v2/posts';
    randomPostUrl = `${this.blogUrl}?filter[orderby]=rand&filter[posts_per_page]=1`;
   
  constructor(private route: ActivatedRoute, private http: Http,
  private _blogService: WordpressService, private router: Router) {
    this.post$ = route.params
            .map((p: any) => p.id)
            .switchMap(id => _blogService.get(id));

    this.comments$ = route.params.map((p:any) => p.id)
                      .switchMap(id => _blogService.getComments(id));
     let postId = route.params.subscribe(
      params => this.postId = params['id']
    );

  }

    goBack() {
        let link = ['/'];
        this.router.navigate(link);
    }
    goToPost(randomPost: any) {
      this.router.navigate(['/blog/' + randomPost.id]);
    }
}