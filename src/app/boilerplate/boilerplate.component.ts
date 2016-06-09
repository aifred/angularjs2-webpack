import { Component } from '@angular/core';
import { RouteConfig, RouterOutlet, AsyncRoute } from '@angular/router-deprecated';

import { NavComponent } from 'app/common/nav/nav.component';

@Component({
  selector: 'app-boilerplate',
  template: require('./boilerplate.component.html'),
  styles: [require('./boilerplate.component.css').toString()],
  directives: [NavComponent, RouterOutlet]
})
@RouteConfig([
	new AsyncRoute({
		path: '/', 
		name: 'BoilerplateList', 
		useAsDefault:true,
		loader:() => new Promise(resolve => {
			(<any>require).ensure(['app/boilerplate/boilerplateList.component'], require => resolve(require('app/boilerplate/boilerplateList.component').BoilerplateListComponent));
		})
	})
])
export class BoilerplateComponent { }
