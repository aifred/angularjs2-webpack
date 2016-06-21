import { Component, OnInit } from '@angular/core';

import { NavComponent } from 'app/common/nav/nav.component';
import { PetApi } from 'service/petstore/api/PetApi';
import { Pet } from 'service/petstore/model/Pet';
import { BASE_URLS } from 'config/url.config';

@Component({
  selector: 'app-boilerplate1',
  template: require('./boilerplate1.component.html'),
  styles: [require('./boilerplate1.component.css').toString()],
  providers: [PetApi],
  directives: [NavComponent]
})
export class Boilerplate1Component implements OnInit {
  imgUrl:string = BASE_URLS.accenture.staticResource.imgBasePath;
  pet: Pet;
  errMessage: any;
  constructor(private petApiService:PetApi) { }

  ngOnInit() {
    this.retrievePet();
  }

  retrievePet() {
    this.petApiService.getPetById(1)
                      .subscribe(
                        res => this.pet = res,
                        err => this.errMessage = err
                      );
  }
}
