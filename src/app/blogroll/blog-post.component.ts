import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import { BlogService } from '../shared/index';

@Component({
  selector: 'wp-post',
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
  <h3> {{ post$.id }} </h3>
  <h2> {{ post$.title }} </h2>
  <div id='blog-post' [innerHtml]="post$.content"> 
 </div>
      <button id='backBtn' (click)='goBack()'> Back to blog home</button>
</div>
  `
})
export class PostComponent {

   randomPost$:any;
    post$:any;
    comments$:any;
    slug: any;
    id : number;
    title: string;
    api: string;
    content: string;
    private sub;

  constructor(private route: ActivatedRoute, private http: Http,
  private _blogService: BlogService, private router: Router) {
    this.post$ = route.params
            .map((p: any) => p.id)
            .switchMap(id => _blogService.get(id))
            .subscribe(res => this.post$ = res);
  }

    goBack() {
        let link = ['/blog'];
        this.router.navigate(link);
    }
    goToPost(randomPost: any) {
      this.router.navigate(['/blog/' + randomPost.id]);
    }

}
