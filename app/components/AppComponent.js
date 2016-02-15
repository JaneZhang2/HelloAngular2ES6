import { Component } from 'angular2/core';
import { RouteConfig } from 'angular2/router';
import template from './app.html';
import { MenuComponent } from './menu';
import { LoggedInRouterOutlet } from '../plugins/router';
import { router } from './router';

@Component({
  selector: 'router-app',
  directives: [LoggedInRouterOutlet, MenuComponent],
  template: template
})
@RouteConfig(router.config)
export class AppComponent {
}
