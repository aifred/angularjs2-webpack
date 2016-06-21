import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated'

import { EServiceService } from 'service/eService.service';
import { EServiceResponseData } from 'model/EServiceResponseData';

@Component({
  selector: 'app-boilerplate2List',
  template: require('./boilerplate2-list.component.html'),
  styles: [require('./boilerplate2-list.component.css').toString()],
  providers: [EServiceService],
  directives: []
})
export class Boilerplate2ListComponent implements OnInit {
	private eservices: EServiceResponseData[];
	private errorMessage: any;

	constructor(
    private router: Router,
    private eserviceService: EServiceService) { }

	ngOnInit() {
		this.loadEservices();
	}

	loadEservices() {
		this.eserviceService.getEServices()
								.subscribe(
									eservices => this.eservices = eservices,
									error => this.errorMessage = <any> error
								);
	}

  gotoCreateNewBoilerplate2() {
    let link = ['CreateNewBoilerplate2'];
    this.router.navigate(link);
  }

  gotoExistingBoilerplate2(eservice: any) {
    let link = ['Boilerplate2Detail',{ id: eservice.id }];
    this.router.navigate(link);
  }
}
