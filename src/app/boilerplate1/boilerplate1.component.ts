import { Component } from '@angular/core';

import { NavComponent } from 'app/common/nav/nav.component';

@Component({
  selector: 'app-boilerplate1',
  template: require('./boilerplate1.component.html'),
  styles: [require('./boilerplate1.component.css').toString()],
  directives: [NavComponent]
})
export class Boilerplate1Component { }
