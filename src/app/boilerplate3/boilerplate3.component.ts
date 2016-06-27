import { Component, OnInit } from '@angular/core';

import { NavComponent } from 'app/common/nav/nav.component';

@Component({
  selector: 'app-boilerplate3',
  template: require('./boilerplate3.component.html'),
  styles:[require('./boilerplate3.component.css').toString()],
  providers: [],
  directives: [NavComponent]
})
export class Boilerplate3Component implements OnInit {

  constructor() {}

  ngOnInit() {}
}
