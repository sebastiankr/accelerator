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
    <h1 class="title">Component Router</h1>
     <a [routerLink]="['Dashboard']">Dashboard</a>
     <a [routerLink]="['Population']">Population</a>
     <a [routerLink]="['Login']">Login</a>     
    <router-outlet></router-outlet>
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
    constructor() {
        console.log('Home');
        console.log(this.user);
    }
}


