import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, AsyncRoute } from '@angular/router-deprecated';

import { DashboardComponent } from 'app/dashboard/dashboard.component';
//import { BoilerplateComponent } from 'app/boilerplate/boilerplate.component';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css').toString()],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault:true},
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
