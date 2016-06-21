import { Component } from '@angular/core';
import { RouteConfig, RouterOutlet, AsyncRoute } from '@angular/router-deprecated';

import { NavComponent } from 'app/common/nav/nav.component';

@Component({
  selector: 'app-boilerplate2',
  template: require('./boilerplate2.component.html'),
  styles: [require('./boilerplate2.component.css').toString()],
  directives: [NavComponent, RouterOutlet]
})
@RouteConfig([
	new AsyncRoute({
		path: '/',
		name: 'Boilerplate2List',
		useAsDefault:true,
		loader:() => new Promise(resolve => {
			(<any>require).ensure(['app/boilerplate2/boilerplate2-list.component'], require => resolve(require('app/boilerplate2/boilerplate2-list.component').Boilerplate2ListComponent));
		})
	}),
	new AsyncRoute({
		path: '/new',
		name: 'CreateNewBoilerplate2',
		loader:() => new Promise(resolve => {
			(<any>require).ensure(['app/boilerplate2/boilerplate2-detail.component'], require => resolve(require('app/boilerplate2/boilerplate2-detail.component').Boilerplate2DetailComponent));
		})
	}),
  new AsyncRoute({
		path: '/:id',
		name: 'Boilerplate2Detail',
		loader:() => new Promise(resolve => {
			(<any>require).ensure(['app/boilerplate2/boilerplate2-detail.component'], require => resolve(require('app/boilerplate2/boilerplate2-detail.component').Boilerplate2DetailComponent));
		})
	})
])
export class Boilerplate2Component { }
