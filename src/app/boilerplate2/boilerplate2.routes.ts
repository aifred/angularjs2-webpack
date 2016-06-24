// import { provideRouter, RouterConfig } from '@angular/router';
import { Routes } from '@ngrx/router'

export const Boilerplate2Routes: Routes = [
  {
    path: 'new',
    loadComponent: () => new Promise(resolve => {
      (<any>require).ensure([],require => {
        resolve(require('app/boilerplate2/boilerplate2-detail.component').Boilerplate2DetailComponent);
      },'boilerplate2-detail')
    })
  },
  {
    path: ':id',
    loadComponent: () => new Promise(resolve => {
      (<any>require).ensure([],require => {
        resolve(require('app/boilerplate2/boilerplate2-detail.component').Boilerplate2DetailComponent);
      },'boilerplate2-detail')
    })
  }
];
