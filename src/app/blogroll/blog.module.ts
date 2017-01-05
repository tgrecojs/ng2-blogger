import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BlogrollComponent } from './blogroll.component';
import { PostComponent } from './index';
import { NameListService } from '../shared/name-list/index';
import blogRoutes from './blog.routes';
import { BlogService } from '../shared/blog/index';


@NgModule({
  imports: [CommonModule, SharedModule, blogRoutes],
  declarations: [BlogrollComponent, PostComponent],
  exports: [BlogrollComponent, PostComponent],
  providers: [BlogService]
})
export class BlogModule { }
