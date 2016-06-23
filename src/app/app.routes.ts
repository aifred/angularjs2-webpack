import { provideRouter, RouterConfig } from '@angular/router';
import { provideWebpack } from '@angularclass/webpack-toolkit';

import { Boilerplate1Component } from 'app/boilerplate1/boilerplate1.component';
import { Boilerplate2Routes } from 'app/boilerplate2/boilerplate2.routes';
import { Boilerplate3Component } from 'app/boilerplate3/boilerplate3.component';
// var Boilerplate1Component;
// var Boilerplate2Component;
// var Boilerplate3Component;
// (<any>require).ensure([
  // 'app/boilerplate1/boilerplate1.component',
//   'app/boilerplate2/boilerplate2.component',
  // 'app/boilerplate3/boilerplate3.component'
// ],function(require){
//   Boilerplate1Component = require('app/boilerplate1/boilerplate1.component');
//   Boilerplate2Component = require('app/boilerplate2/boilerplate2.component');
  // let Boilerplate3Component = require('app/boilerplate3/boilerplate3.component').Boilerplate3Component
// });

export const routes: RouterConfig = [
  { path: 'boilerplate1', component: Boilerplate1Component },
  ...Boilerplate2Routes,
  { path: 'boilerplate3', component: Boilerplate3Component}
];
// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
// the component correctly
// export const asyncRoutes: AsyncRoutes = {
//   'Boilerplate3': require('es6-promise-loader!app/boilerplate3/boilerplate3.component')
// }

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  // provideWebpack(asyncRoutes)
];
