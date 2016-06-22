import { Component, OnInit } from '@angular/core';

import { NavComponent } from 'app/common/nav/nav.component';
import { PetApi } from 'service/petstore/api/PetApi';
import { Pet } from 'service/petstore/model/Pet';
import { BASE_URLS } from 'config/url.config';
import { EServiceApi } from 'service/eservice/api/EServiceApi';
import { EService } from 'service/eservice/model/EService';

@Component({
  selector: 'app-boilerplate1',
  template: require('./boilerplate1.component.html'),
  styles: [require('./boilerplate1.component.css').toString()],
  providers: [PetApi,EServiceApi],
  directives: [NavComponent]
})
export class Boilerplate1Component implements OnInit {
  imgUrl:string = BASE_URLS.accenture.staticResource.imgBasePath;
  pet: Pet;
  eservices: EService;
  errMessage: any;
  constructor(private petApiService:PetApi,private eserviceApiService:EServiceApi) { }

  ngOnInit() {
    this.retrievePet();
    this.retrieveEServices();
  }

  retrievePet() {
    this.petApiService.getPetById(1)
                      .subscribe(
                        res => this.pet = res,
                        err => this.errMessage = err
                      );
  }

  retrieveEServices() {
    this.eserviceApiService.retrieveBoilerplateGet()
                      .subscribe(
                        res => this.eservices = res.data.boilerplateList,
                        err => this.errMessage = err
                      );
  }
}
