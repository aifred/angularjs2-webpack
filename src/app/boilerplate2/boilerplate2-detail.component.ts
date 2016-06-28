import { Component, OnInit, OnDestroy } from '@angular/core';
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
  providers: [],
  directives: []
})
export class Boilerplate2DetailComponent implements OnInit, OnDestroy {
  eservice: EServiceResponseData;
  OPERATION_TYPE = OperationType;
  operationType: number = OperationType.CREATE;
  errorMessage: any;
  response: RestResponse;
  retrievalSubscription: any;

	constructor(
    // private route: ActivatedRoute,
    private routeParams: RouteParams,
    private router: Router,
    private eserviceService: EServiceService) {
      // always initialise the form variables
      this.eservice = new EServiceResponseData();

      // load the details related to the route param
      // this.routeParams.pluck<string>('id').subscribe(param => {
      //   let id = (param !== null && param !== undefined ? +param : null);
      //   if(id !== null) {
      //     this.operationType = OperationType.UPDATE;
      //     this.eserviceService.getEService(id)
      //                 .subscribe(
      //                   eservice => this.eservice = eservice[0],
      //                   error => this.errorMessage = error
      //                 );
      //     console.log(this.eservice);
      //   }
      // });
      this.retrievalSubscription = this.routeParams.pluck<string>('id')
        .distinctUntilChanged()
        .mergeMap(id => {
          console.log(id);
          let eServiceId = (id !== null && id !== undefined ? +id : null);
          if(eServiceId !== null) {
            this.operationType = OperationType.UPDATE;
            this.eserviceService.getEService(eServiceId)
                                .subscribe(
                                  eservice => {
                                    console.log(eservice[0]);
                                    this.eservice = eservice[0]
                                    Observable.of(true);
                                  },
                                  error => Observable.of(false)
                                );
            return id;
          }
        }).subscribe();
  }

	ngOnInit() {
	}

  ngOnDestroy() {
    this.retrievalSubscription.unsubscribe();
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
