/// <reference path="../typings/angular2-meteor.d.ts" />
/// <reference path="../typings/meteor-accounts.d.ts" />

import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';

import {InjectUser} from 'meteor-accounts';

import {Dashboard} from './ap/dashboard';
import {Population} from './ap/population';

@Component({
    selector: 'ap',
    template: `
    <body [class.hide-sidedrawer]="isHidden">
<div id="sidedrawer" [class.active]="isActive" class="mui--no-user-select">
  <!-- Side drawer content goes here -->
</div>
<header id="header">
  <div class="mui-appbar mui--appbar-line-height">
    <div class="mui-container-fluid">
      <a (click)="showSidedrawer()" class="sidedrawer-toggle mui--visible-xs-inline-block js-show-sidedrawer">☰</a>
      <a (click)="hideSidedrawer()" class="sidedrawer-toggle mui--hidden-xs js-hide-sidedrawer">☰</a>
      <span class="mui--text-title mui--visible-xs-inline-block">Brand.io</span>
    </div>
  </div>
</header>
<div id="content-wrapper">
  <!-- Main content goes here -->
  <h1 class="title">Component Router</h1>
     <a [routerLink]="['Dashboard']">Dashboard</a>
     <a [routerLink]="['Population']">Population</a>
     <a [routerLink]="['Login']">Login</a>     
    <router-outlet></router-outlet>
</div>
<footer id="footer">
  <div class="mui-container-fluid">
    <br>
    Made with ♥ by <a href="https://www.muicss.com">MUI</a>
  </div>
</footer>
<body>
    
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/dashboard', name: 'Dashboard', component: Dashboard, useAsDefault: true },
    { path: '/population', name: 'Population', component: Population }
])
@InjectUser()
export class AdminPanel {
    user: Meteor.User;
    public isHidden = false;
    public isActive = false;
    constructor() {
        console.log('Home');
        console.log(this.user);
    }

    hideSidedrawer() {
        this.isHidden = true;
    }

    showSidedrawer() {
        // show overlay
        // var options = {
        //     onclose: function() {
        //         $sidedrawerEl
        //             .removeClass('active')
        //             .appendTo(document.body);
        //     }
        // };

        // var $overlayEl = $(mui.overlay('on', options));

        // show element
        // $sidedrawerEl.appendTo($overlayEl);
        // setTimeout(function() {
        //     $sidedrawerEl.addClass('active');
        // }, 20);
        this.isHidden = false;
        
    }
}


