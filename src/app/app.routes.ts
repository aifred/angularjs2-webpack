import { provideRouter, RouterConfig } from '@angular/router';

import { Boilerplate1Component } from 'app/boilerplate1/boilerplate1.component';
import { Boilerplate2Routes } from 'app/boilerplate2/boilerplate2.routes';
import { Boilerplate3Component } from 'app/boilerplate3/boilerplate3.component';
// var Boilerplate1Component,Boilerplate2Component,Boilerplate3Component;
// (<any>require).ensure(['app/boilerplate1/boilerplate1.component',
//   'app/boilerplate2/boilerplate2.component',
//   'app/boilerplate3/boilerplate3.component'],function(require){
//   Boilerplate1Component = require('app/boilerplate1/boilerplate1.component');
//   Boilerplate2Component = require('app/boilerplate2/boilerplate2.component');
//   Boilerplate3Component = require('app/boilerplate3/boilerplate3.component');
// });

export const routes: RouterConfig = [
  { path: 'boilerplate1', component: Boilerplate1Component },
  ...Boilerplate2Routes,
  { path: 'boilerplate3', component: resolve => {
    (<any>require).ensure(['app/boilerplate3/boilerplate3.component'], require => resolve(require('app/boilerplate3/boilerplate3.component').Boilerplate3Component)); }
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
