/// <reference path="../typings/angular2-meteor.d.ts" />
import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {InjectUser} from 'meteor-accounts';

import {Login} from './login';
import {AdminPanel} from './adminpanel';

@Component({
    selector: 'app',
    template: `
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/ap/...', name: 'AdminPanel', component: AdminPanel, useAsDefault: true },
    { path: '/login', name: 'Login', component: Login }
])
@InjectUser()
export class AppComponent {
    user: Meteor.User;
    constructor(router: Router) {
        if (!this.user) {
            router.navigateByUrl('/login')
        }
        console.log(this.user);
    }
}
