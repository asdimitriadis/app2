import {Routes} from '@angular/router';

import {HomepageComponent} from './homepage/homepage.component';
import {JoinComponent} from './join/join.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {environment} from '../../environments/environment';

export const SRT_WEBAPP_ROUTES: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full',
  },
  {
    path: 'join',
    component: JoinComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
