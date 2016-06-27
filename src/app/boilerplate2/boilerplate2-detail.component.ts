import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
import { Router, RouteParams } from '@ngrx/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';

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
  eservice: EServiceResponseData;
  OPERATION_TYPE = OperationType;
  operationType: number = OperationType.CREATE;
  errorMessage: any;
  response: RestResponse;

	constructor(
    // private route: ActivatedRoute,
    private routeParams: RouteParams,
    private router: Router,
    private eserviceService: EServiceService) {
      // always initialise the form variables
      this.eservice = {};

      // this.eservice = routeParams.pluck<string>('id')
      //   .distinctUntilChanged()
      //   .mergeMap(id => {
      //     console.log(id);
      //     if(id !== null) {
      //       this.operationType = OperationType.UPDATE;
      //       return eserviceService.getEService(id)
      //                   .subscribe(
      //                     (eservice) => eservice[0],
      //                     error => this.errorMessage = error
      //                   );
      //     }
      // });

      // load the details related to the route param
      routeParams.pluck<string>('id').subscribe(param => {
        let id = (param !== null && param !== undefined ? +param : null);
        console.log(id);
        if(id !== null) {
          this.operationType = OperationType.UPDATE;
          eserviceService.getEService(id)
                      .subscribe(
                        eservice => this.eservice = eservice[0],
                        error => this.errorMessage = error
                      );
          console.log(this.eservice);
        }
      });
  }

	ngOnInit() {

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
