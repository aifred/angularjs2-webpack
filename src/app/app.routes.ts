// import { provideRouter, RouterConfig } from '@angular/router';
import { provideRouter, Routes } from '@ngrx/router'

// import { Boilerplate1Component } from 'app/boilerplate1/boilerplate1.component';
// import { Boilerplate2Routes } from 'app/boilerplate2/boilerplate2.routes';

export const routes: Routes = [
  {
    path:'/',
    redirectTo:'boilerplate1'
  },
  {
    path: 'boilerplate1',
    loadComponent: () => new Promise(resolve => {
      (<any>require).ensure([],require => {
        resolve(require('app/boilerplate1/boilerplate1.component').Boilerplate1Component);
      })
    })
  },
  {
    path: 'boilerplate2',
    loadComponent: () => new Promise(resolve => {
      (<any>require).ensure([],require => {
        resolve(require('app/boilerplate2/boilerplate2.component').Boilerplate2Component);
      },'boilerplate2')
    }),
    index: {
      loadComponent: () => new Promise(resolve => {
        (<any>require).ensure([],require => {
          resolve(require('app/boilerplate2/boilerplate2-list.component').Boilerplate2ListComponent);
        },'boilerplate2-list')
      })
    },
    // loadChildren: () => new Promise(resolve => {
    //   (<any>require).ensure([], require => {
    //     resolve(require('app/boilerplate2/boilerplate2.routes').Boilerplate2Routes);
    //   },'boilerplate2-routes')
    // })
    loadChildren: () => new Promise(resolve => resolve(require('app/boilerplate2/boilerplate2.routes').Boilerplate2Routes)
    )
  },
  {
    path: 'boilerplate3',
    loadComponent: () => new Promise(resolve => {
      (<any>require).ensure([],require => {
        resolve(require('app/boilerplate3/boilerplate3.component').Boilerplate3Component);
      })
    })
  }
];

// export const routes: RouterConfig = [
//   { path: 'boilerplate1', component: Boilerplate1Component },
//   ...Boilerplate2Routes,
//   { path: 'boilerplate3', component: () => new Promise((resolve,reject) => {
//       try {
//         (<any>require).ensure(['app/boilerplate3/boilerplate3.component'],require => resolve(require('app/boilerplate3/boilerplate3.component').Boilerplate3Component))
//       } catch(err) {
//         console.log(err);
//         reject(err);
//       }
//     })
//   }
// ];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
