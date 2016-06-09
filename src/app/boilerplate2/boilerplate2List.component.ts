import { Component } from '@angular/core';

import { NavComponent } from 'app/common/nav/nav.component';

@Component({
  selector: 'app-boilerplate2List',
  template: require('./boilerplate2List.component.html'),
  styles: [require('./boilerplate2List.component.css').toString()],
  directives: [NavComponent]
})
export class Boilerplate2ListComponent { }
