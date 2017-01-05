import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

import { ContactRoutes } from './contact/contact.routes';
import { BlogRoutes } from './blogroll/blog.routes';


export const ROUTES: Routes = [
  ...ContactRoutes,
  ...BlogRoutes,
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
      .then((comp: any) => comp.default),
  }
];
