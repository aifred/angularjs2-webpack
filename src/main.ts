import { bootstrap } from '@angular/platform-browser-dynamic';
import { Title } from '@angular/platform-browser';
import { enableProdMode,provide } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { AppComponent } from 'app/app.component';
import { APP_ROUTER_PROVIDERS } from 'app/app.routes';
import { EServiceService } from 'service/eService.service.ts';


if(process.env.ENV === 'PROD' || process.env.ENV === 'PORTLET') {
	enableProdMode();
}

bootstrap(AppComponent,[HTTP_PROVIDERS,APP_ROUTER_PROVIDERS,Title,
	provide(APP_BASE_HREF,{useValue:'/'}), disableDeprecatedForms(),provideForms(),
	EServiceService]
).catch(err => console.error(err));
