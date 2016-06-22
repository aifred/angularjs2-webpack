import { provideRouter, RouterConfig } from '@angular/router';

import { Boilerplate2Component } from 'app/boilerplate2/boilerplate2.component';
import { Boilerplate2ListComponent } from 'app/boilerplate2/boilerplate2-list.component';
import { Boilerplate2DetailComponent } from 'app/boilerplate2/boilerplate2-detail.component';
// var Boilerplate1Component,Boilerplate2Component,Boilerplate3Component;
// (<any>require).ensure(['app/boilerplate1/boilerplate1.component',
//   'app/boilerplate2/boilerplate2.component',
//   'app/boilerplate3/boilerplate3.component'],function(require){
//   Boilerplate1Component = require('app/boilerplate1/boilerplate1.component');
//   Boilerplate2Component = require('app/boilerplate2/boilerplate2.component');
//   Boilerplate3Component = require('app/boilerplate3/boilerplate3.component');
// });

export const Boilerplate2Routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/boilerplate1',
    terminal: true
  },
  {
    path: 'boilerplate2',
    component:Boilerplate2Component,
    children: [
      { path: '', component: Boilerplate2ListComponent },
      { path: 'new', component: Boilerplate2DetailComponent },
      { path: ':id', component: Boilerplate2DetailComponent }
    ]
  }
];
