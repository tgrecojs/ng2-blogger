import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams, Jsonp } from '@angular/http';
import { Post } from './post';
import { Comment } from './comment';
import { Observable } from 'rxjs/Observable';
import { BloggerPost } from './blogger';
import 'rxjs/add/operator/delay';


@Injectable()
export class BlogService {
  postId: number;
  // /blogge/v2/blogs/<> https://developers.google.com/blogger/docs/3.0/using
  postUrl = 
  'https://www.googleapis.com/blogger/v3/blogs/4789269094064278868/posts';
  key = 'key=AIzaSyC2NkYs-Zht1lpX2ipJCtO6FdKzplYlSlE';

  constructor(private http: Http) {
  }

  get(id: number): Observable<BloggerPost> {
    let post$ = this.http
      .get(`${this.postUrl}/${id}?${this.key}`)
      .map(mapBloggerPost);
      return post$;
  }


  getAll(): Observable<BloggerPost[]> {
    let posts$ = this.http
      .get(`${this.postUrl}?${this.key}`)
      .map(mapPosts);
      return posts$;
  }

   search (term: string) {
    let obs = this.http.get(`${this.postUrl}/search?q=${term}&${this.key}`)
               .map(response => response.json().items);
    if (term.length === 2) {
      obs = obs.delay(1000);
    }
    console.log(obs);
    return obs;
  }

}


function mapPosts(res: Response): BloggerPost[] {
   // The response of the API has a results
   // property with the actual results
   console.log(res.json().items);
   return res.json().items.map(toBlogPost);
}


function toBlogPost(r: any): BloggerPost {
  let post = <BloggerPost>({
    id: r.id,
    title: r.title,
    replies: r.replies,
    published: r.published,
    content: r.content
  });
  console.log(`Parsed Post with id of: ${post.id}`);
  return post;
}


function mapBloggerPost(response: Response): BloggerPost {
   // topost looks just like in the previous example
   return toBlogPost(response.json());
}


