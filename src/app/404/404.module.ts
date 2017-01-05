import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from './index';
import wildcardRoutes from './404.routes';


@NgModule({
  imports: [CommonModule, SharedModule, wildcardRoutes],
  declarations: [PageNotFoundComponent],
  exports: [PageNotFoundComponent],
  providers: []
})
export class PageNotFoundModule { }
