import { Routes } from '@angular/router';

import { Reports } from './reports/reports';
import { Budget } from './budget/budget';
import { Projects } from './projects/projects';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'reports',
    pathMatch: 'full'
  },

  {
    path: 'reports',
    component: Reports
  },

  {
    path: 'budget',
    component: Budget
  },

  {
    path: 'projects',
    component: Projects
  }

];