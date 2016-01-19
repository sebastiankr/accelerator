/// <reference path="../typings/angular2-meteor.d.ts" />
/// <reference path="../typings/meteor-accounts.d.ts" />

import {Component, View} from 'angular2/core';
import {NgIf, FORM_DIRECTIVES, Control, FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {Router} from 'angular2/router';

import {AccountsService, InjectUser} from 'meteor-accounts';
import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'login'
    ,template: `
<h1>Login<h1>
<form (submit)="login($event)" [ngFormModel]="loginForm">
  <div *ngIf="!user">
    <input type="text" placeholder="User" ngControl="user">
    <input type="text" type="password" placeholder="Password" ngControl="pwd">
    <button type="submit">LogIn</button>
  </div>
  <div *ngIf="user">
    <button type="button" (click)="logout()">LogOut</button>
  </div>
</form>
    `
    ,providers: [AccountsService]
    ,directives: [FORM_DIRECTIVES, NgIf]
})
@InjectUser()
export class Login extends MeteorComponent {
    loginForm = (new FormBuilder()).group({
        user: ['', Validators.required],
        pwd: ['', Validators.required]
    });

    constructor(private accounts: AccountsService, private router: Router) {
        super();
    }

    login(event) {
        event.preventDefault();

        console.log(this.loginForm.valid);
        if (this.loginForm.valid) {
            var login = this.loginForm.value;
            this.accounts.login(login.user, login.pwd)
                .then(() => {
                    (<Control>this.loginForm.controls['user']).updateValue('');
                    (<Control>this.loginForm.controls['pwd']).updateValue('');
                })
                .catch(err => {
                    alert(err);
                });
            this.router.navigateByUrl('/');
        }
    }

    logout() {
        this.accounts.logout();
    }
}