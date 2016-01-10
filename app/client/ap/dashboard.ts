/// <reference path="../../typings/angular2-meteor.d.ts" />
/// <reference path="../../typings/meteor-accounts.d.ts" />

import {Component, View} from 'angular2/core';

import {InjectUser} from 'meteor-accounts';

@Component({ 
    selector: 'dashboard'
    ,template: `
    <h1>Dashboard</h1>
    `
})
@InjectUser()
export class Dashboard {
    user: Meteor.User;
    constructor() {
        console.log('Dashboard');
        console.log(this.user);
    }
}
