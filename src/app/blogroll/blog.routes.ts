import { Route } from '@angular/router';
import { BlogrollComponent } from './index';
import { PostComponent } from './index';
import { RouterModule } from '@angular/router';

export const BlogRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: '/blog' },
  { path: 'blog', component: BlogrollComponent },
  { path: 'blog/:id', component: PostComponent }
]

export default RouterModule.forRoot(BlogRoutes);
