import { Component } from '@angular/core';

import { NavComponent } from 'app/common/nav/nav.component';

@Component({
  selector: 'app-boilerplateList',
  template: require('./boilerplateList.component.html'),
  styles: [require('./boilerplateList.component.css').toString()],
  directives: [NavComponent]
})
export class BoilerplateListComponent { }
