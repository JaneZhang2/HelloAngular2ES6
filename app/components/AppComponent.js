import { Component } from 'angular2/core';
import { RouteConfig } from 'angular2/router';
import { LoggedInRouterOutlet } from '../plugins/router';
import { router } from './router';
import Rx from 'rx';
import { UserService } from '../services/user';

import { HomeComponent } from './HomeComponent';

@Component({
  selector: 'router-app',
  directives: [HomeComponent, LoggedInRouterOutlet],
  template: `<router-outlet></router-outlet>`
})
@RouteConfig(router.config)
export class AppComponent {
}
