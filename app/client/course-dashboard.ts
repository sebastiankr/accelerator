/// <reference path="../typings/angular2-meteor.d.ts" />
/// <reference path="../typings/meteor-accounts.d.ts" />

import {Component, View} from 'angular2/core';
import {NgIf, FORM_DIRECTIVES, Control, FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {AccountsService, InjectUser} from 'meteor-accounts';
import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'course-dashboard'
    ,template: `
<h1>Course Dashboard<h1>
<a [routerLink]="['AdminPanel']">Admin Panel</a>
    `
    ,directives: [ROUTER_DIRECTIVES]
})

export class CourseDashboard extends MeteorComponent {
    
    constructor() {
        super();
    }

}