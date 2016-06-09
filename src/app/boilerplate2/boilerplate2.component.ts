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
			(<any>require).ensure(['app/boilerplate2/boilerplate2List.component'], require => resolve(require('app/boilerplate2/boilerplate2List.component').Boilerplate2ListComponent));
		})
	})
])
export class Boilerplate2Component { }
