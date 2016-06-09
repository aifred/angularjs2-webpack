import { Component, OnInit } from '@angular/core';

import { EServiceService } from 'service/eService.service';
import { EServiceResponseData } from 'model/EServiceResponseData';

@Component({
  selector: 'app-boilerplate2List',
  template: require('./boilerplate2List.component.html'),
  styles: [require('./boilerplate2List.component.css').toString()],
  providers: [EServiceService],
  directives: []
})
export class Boilerplate2ListComponent implements OnInit { 
	private eservices: EServiceResponseData[];
	private errorMessage: any;

	constructor(private eserviceService: EServiceService) { }

	ngOnInit() {
	//	this.loadEservices();
	}

	loadEservices() {
		this.eserviceService.getEServices()
							.subscribe(
								eservices => this.eservices = eservices,
								error => this.errorMessage = <any> error
							);
	}
}
