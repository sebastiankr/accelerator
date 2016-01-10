/// <reference path="../../typings/angular2-meteor.d.ts" />
/// <reference path="../../typings/meteor-accounts.d.ts" />

import {Component, View} from 'angular2/core';

import {InjectUser} from 'meteor-accounts';

@Component({ 
    selector: 'population'
    ,template: `
    <h1>Population</h1>
    `
})
@InjectUser()
export class Population {
    user: Meteor.User;
    constructor() {
        console.log('population');
        console.log(this.user);
    }
}
