import { bootstrap } from '@angular/platform-browser-dynamic';
import { Title } from '@angular/platform-browser';
import { enableProdMode,provide } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from 'app/app.component';
import { APP_ROUTER_PROVIDERS } from 'app/app.routes';


if(process.env.ENV === 'PROD') {
	enableProdMode();
}

bootstrap(AppComponent,[HTTP_PROVIDERS,APP_ROUTER_PROVIDERS,Title,provide(APP_BASE_HREF,{useValue:'/'})
]).catch(err => console.error(err));
