import { Route, RouterModule } from '@angular/router';
import { ContactComponent } from './index';

export const ContactRoutes: Route[] = [
  {
    path: 'contact-me',
    component: ContactComponent
  }
];

export default RouterModule.forRoot(ContactRoutes);
