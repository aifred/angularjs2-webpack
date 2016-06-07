import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { NavComponent } from 'app/common/nav/nav.component';

@Component({
  selector: 'app-boilerplate',
  template: require('./boilerplate.component.html'),
  styles: [require('./boilerplate.component.css').toString()],
  directives: [NavComponent]
})
export class BoilerplateComponent { }
