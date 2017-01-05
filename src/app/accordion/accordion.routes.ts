import { Route } from '@angular/router';
import { AccordionComponent } from './index';
import { RouterModule } from '@angular/router';

export const AccordionRoutes: Route[] = [
  { path: 'about-me', component: AccordionComponent }
];

export default RouterModule.forRoot(AccordionRoutes);
