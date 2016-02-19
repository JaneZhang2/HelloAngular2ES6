import { Component } from 'angular2/core';
import { RouteConfig } from 'angular2/router';
import { MainRouterOutlet } from './MainRouterOutlet';

import { UserService } from '../services/user';

import { HomeComponent } from './HomeComponent';
import { LoginComponent } from './login';

@Component({
  selector: 'router-app',
  directives: [HomeComponent, MainRouterOutlet],
  template: `<router-outlet></router-outlet>`
})
@RouteConfig([
  //{ path: '/', component: ListComponent, name: 'List', useAsDefault: true },
  {path: '/', name: 'root', redirectTo: ['/Home']},
  {path: '/home', component: HomeComponent, name: 'Home'},
  {path: '/login', component: LoginComponent, name: 'Login'}
])
export class AppComponent {
}
