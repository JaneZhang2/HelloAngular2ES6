import { Component } from 'angular2/core';
import { RouteConfig,Router } from 'angular2/router';
import template from './app.html';
import { MainHeaderComponent } from './MainHeaderComponent';
import { MainSideBarComponent } from './MainSideBarComponent';
import { MainFooterComponent } from './MainFooterComponent';
import { MenuComponent } from './menu';
import { LoggedInRouterOutlet } from '../plugins/router';
import { router } from './router';
import Rx from 'rx';
import { UserService } from '../services/user';

@Component({
  selector: 'router-app',
  directives: [MainHeaderComponent, MainSideBarComponent, MainFooterComponent, LoggedInRouterOutlet, MenuComponent],
  template: `<router-outlet></router-outlet>`
})
@RouteConfig(router.config)
export class AppComponent {
}
