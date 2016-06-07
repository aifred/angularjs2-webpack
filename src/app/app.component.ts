import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, AsyncRoute } from '@angular/router-deprecated';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css').toString()],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	new AsyncRoute({
		path: '/dashboard', 
		name: 'Dashboard', 
		useAsDefault:true,
		loader:() => new Promise(resolve => {
			(<any>require).ensure(['app/dashboard/dashboard.component'], require => resolve(require('app/dashboard/dashboard.component').DashboardComponent));
		})
	}),
	//{path: '/boilerplate', name: 'Boilerplate', component: BoilerplateComponent},
	new AsyncRoute({
		path: '/boilerplate', 
		name: 'Boilerplate', 
		loader:() => new Promise(resolve => {
			(<any>require).ensure(['app/boilerplate/boilerplate.component'], require => resolve(require('app/boilerplate/boilerplate.component').BoilerplateComponent));
		})
	})
])
export class AppComponent { 

}
