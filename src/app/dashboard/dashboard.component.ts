import { Component } from '@angular/core';

import { NavComponent } from 'app/common/nav/nav.component';

@Component({
  selector: 'app-dashboard',
  template: require('./dashboard.component.html'),
  styles: [require('./dashboard.component.css').toString()],
  directives: [NavComponent]
})
export class DashboardComponent { }
