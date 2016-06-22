import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { NavComponent } from 'app/common/nav/nav.component';

@Component({
  selector: 'app-boilerplate2',
  template: require('./boilerplate2.component.html'),
  styles: [require('./boilerplate2.component.css').toString()],
  directives: [NavComponent, ROUTER_DIRECTIVES]
})
export class Boilerplate2Component { }
