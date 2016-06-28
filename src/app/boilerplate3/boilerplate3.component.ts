import { Component, OnInit } from '@angular/core';

import { NavComponent } from 'app/common/nav/nav.component';
import { EServiceService } from 'service/boilerplate/api/eService.service';

@Component({
  selector: 'app-boilerplate3',
  template: require('./boilerplate3.component.html'),
  styles:[require('./boilerplate3.component.css').toString()],
  providers: [],
  directives: [NavComponent]
})
export class Boilerplate3Component implements OnInit {

  constructor(eserviceService: EServiceService) {
    eserviceService.testFailureGetEServices()
      .subscribe(
        res => {
          console.log(res)
        }
      );
  }

  ngOnInit() {}
}
