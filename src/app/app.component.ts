import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, AsyncRoute, Redirect } from '@angular/router-deprecated';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css').toString()],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	new AsyncRoute({
		path: '/boilerplate1', 
		name: 'Boilerplate1', 
		useAsDefault:true,
		loader:() => new Promise(resolve => {
			(<any>require).ensure(['app/boilerplate1/boilerplate1.component'], require => resolve(require('app/boilerplate1/boilerplate1.component').Boilerplate1Component));
		})
	}),
	new AsyncRoute({
		path: '/boilerplate2/...', 
		name: 'Boilerplate2', 
		loader:() => new Promise(resolve => {
			(<any>require).ensure(['app/boilerplate2/boilerplate2.component'], require => resolve(require('app/boilerplate2/boilerplate2.component').Boilerplate2Component));
		})
	})
])
export class AppComponent { 

}
