/// <reference path="../typings/angular2-meteor.d.ts" />
import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {InjectUser} from 'meteor-accounts';

import {Login} from './login';
import {AdminPanel} from './adminpanel';
import {Sitemap} from './sitemap';
import {CourseDashboard} from './course-dashboard';

@Component({
    selector: 'app',
    template: `
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', name: 'Sitemap', component: Sitemap, useAsDefault: true },
    { path: '/ap/...', name: 'AdminPanel', component: AdminPanel },
    { path: '/login', name: 'Login', component: Login },
    { path: '/course', name: 'Course Dashboard', component: CourseDashboard },
])
@InjectUser()
export class AppComponent {
    user: Meteor.User;
    constructor() {
        console.log('app.component');
    }
}
