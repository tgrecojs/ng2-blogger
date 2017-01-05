import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AccordionComponent } from './accordion.component';
import accordionRoutes from './accordion.routes';

@NgModule({
  imports: [CommonModule, SharedModule, accordionRoutes],
  declarations: [AccordionComponent],
  exports: [AccordionComponent],
  providers: []
})
export class AccordionModule { }
