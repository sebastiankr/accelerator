/// <reference path="../typings/angular2-meteor.d.ts" />

import {Component, View, provide} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {ROUTER_PROVIDERS, HashLocationStrategy, LocationStrategy} from 'angular2/router';
import {LoginForm} from './login-form/login-form';
import {PartiesCmp} from './parties/parties';
import {PartyDetailsCmp} from './party-details/party-details';
import {bootstrap} from 'angular2-meteor';

@Component({
  selector: 'socially'
})
@View({
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES, PartiesCmp]
})
@RouteConfig([
  { path: '/', component: PartiesCmp },
  { path: '/login', as: 'Login', component: LoginForm },
  { path: '/party/:partyId', as: 'PartyDetails', component: PartyDetailsCmp }
])
export class Socially { }

bootstrap(Socially, [
  ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
