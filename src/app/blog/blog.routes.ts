import { Route } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogrollComponent } from './blogroll.component';

import { BlogPostComponent } from './blog-post/blog-post.component';
import { RouterModule } from '@angular/router';

export const BlogRoutes: Route[] = [
    { path: '', pathMatch: 'full', component: BlogComponent}, 
        { path: ':id', component: BlogPostComponent },
];


export default RouterModule.forRoot(BlogRoutes);
