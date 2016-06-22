import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { NavigationService } from 'service/navigation.service';
import { NavigationLink } from 'app/common/nav/navigationLink.ts';

@Component({
  selector: 'main-nav',
  template: require('./nav.component.html'),
  styles: [require('./nav.component.css').toString()],
  providers: [NavigationService],
  directives: [ROUTER_DIRECTIVES]
})
export class NavComponent {
	links: NavigationLink[];

  constructor(navigationService: NavigationService,private titleService: Title) {
    this.links = navigationService.getNavigations();
  }

  public setTitle(newTitle:string) {
    this.titleService.setTitle(newTitle);
  }

	// TODO: Remove this when we're done
	get diagnostic() {
		return JSON.stringify(this.links);
	}
}
