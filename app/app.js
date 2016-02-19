import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/dist/zone-microtask';
import 'rxjs/Rx';
import './option';

import { bootstrap } from 'angular2/platform/browser';
import { enableProdMode, provide } from 'angular2/core';
import { AppComponent } from './components/AppComponent';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { PostService } from './services/post';
import { UserService } from './services/user';

import './test.css';

if (ENVIRONMENT === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
  PostService, UserService
]);
