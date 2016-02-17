import { Component } from 'angular2/core';
import { MainHeaderComponent } from './MainHeaderComponent';
import { MainSideBarComponent } from './MainSideBarComponent';
import { MainFooterComponent } from './MainFooterComponent';
import Rx from 'rx';

@Component({
  selector: 'home',
  directives: [MainHeaderComponent, MainSideBarComponent, MainFooterComponent],
  template: `
  <div class="wrapper" style="min-height: 800px;">

    <main-header></main-header>
    <!-- Left side column. contains the logo and sidebar -->
    <main-sidebar></main-sidebar>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
    </div>
    <!-- /.content-wrapper -->
    <main-footer></main-footer>
</div>
  `
})
export class HomeComponent {
  //static get parameters() {
  //  return [[UserService], [Router]];
  //}

  constructor() {
  }
}
