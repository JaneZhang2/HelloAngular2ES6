import { Component } from 'angular2/core';
import { RouteConfig } from 'angular2/router';
import template from './app.html';
import { MainHeaderComponent } from './MainHeaderComponent';
import { MainSideBarComponent } from './MainSideBarComponent';
import { MenuComponent } from './menu';
import { LoggedInRouterOutlet } from '../plugins/router';
import { router } from './router';
import Rx from 'rx';

@Component({
  selector: 'router-app',
  directives: [MainHeaderComponent, MainSideBarComponent, LoggedInRouterOutlet, MenuComponent],
  template: template
})
@RouteConfig(router.config)
export class AppComponent {
  constructor() {

  }
}
