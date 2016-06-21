import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { EServiceResponseData } from 'model/EServiceResponseData';
import { EServiceService } from 'service/eService.service';
import { RestResponse } from 'model/RestResponse';
import { OperationType } from 'enum/OperationType';

@Component({
  selector: 'app-boilerplate2Detail',
  template: require('./boilerplate2-detail.component.html'),
  styles: [require('./boilerplate2-detail.component.css').toString()],
  providers: [EServiceService],
  directives: []
})
export class Boilerplate2DetailComponent implements OnInit {
  private eservice: EServiceResponseData = new EServiceResponseData();
  private OPERATION_TYPE = OperationType;
  private operationType: number = OperationType.CREATE;
  private errorMessage: any;
  private response: RestResponse;

	constructor(
    private routeParams: RouteParams,
    private eserviceService: EServiceService) {
  }

	ngOnInit() {
    let id = (this.routeParams.get('id') !== null ? +this.routeParams.get('id') : null);
    if(id !== null) {
      this.operationType = OperationType.UPDATE;
      this.eserviceService.getEService(id)
                  .subscribe(
                    eservice => this.eservice = eservice[0],
                    error => this.errorMessage = error
                  );
    }
	}

  goBack() {
    window.history.back();
  }

  submitBoilerplateForm(eservice: EServiceResponseData) {
    if(this.operationType === OperationType.CREATE) {
      this.eserviceService.createEService(this.eservice)
                  .subscribe(
                    restResponse => this.response = restResponse,
                    error => this.errorMessage = error
                  );
    } else if(this.operationType === OperationType.UPDATE) {
      this.eserviceService.updateEService(this.eservice)
                  .subscribe(
                    restResponse => this.response = restResponse,
                    error => this.errorMessage = error
                  );
    }

  }
}
