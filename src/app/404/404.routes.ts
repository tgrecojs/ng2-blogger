import { Route } from '@angular/router';
import { PageNotFoundComponent } from './index';
import { RouterModule } from '@angular/router';

export const WildcardRoutes: Route[] = [
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

export default RouterModule.forRoot(WildcardRoutes);
