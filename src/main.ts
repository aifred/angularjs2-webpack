import { bootstrap } from '@angular/platform-browser-dynamic';
import { Title } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from 'app/app.component';


if(process.env.ENV === 'production') {
	enableProdMode();
}

bootstrap(AppComponent,[HTTP_PROVIDERS, ROUTER_PROVIDERS,Title]);
