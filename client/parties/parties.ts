/// <reference path="../../typings/angular2-meteor.d.ts" />
/// <reference path="../../typings/socially.d.ts" />
/// <reference path="../../typings/meteor-accounts.d.ts" />
/// <reference path="../../typings/jquery/jquery.d.ts" />

import {Component, View} from 'angular2/core';

import {NgModel, NgFor} from 'angular2/common';

import {ROUTER_DIRECTIVES} from 'angular2/router';

import {PartyForm} from 'client/party-form/party-form';

import {LoginForm} from 'client/login-form/login-form';

import {MeteorComponent} from 'angular2-meteor';

import {Parties} from 'collections/parties';

@Component({
  selector: 'parties'
})
@View({
  templateUrl: 'client/parties/parties.html',
  directives: [NgFor, ROUTER_DIRECTIVES, NgModel, PartyForm, LoginForm]
})
export class PartiesCmp extends MeteorComponent {
  parties: Mongo.Cursor<Party>;
  location: ReactiveVar<String>;
  sidebarOpen = true;

  constructor() {
    super();
    this.subscribe('parties', 'Palo Alto');
    this.location = new ReactiveVar('Palo Alto');

    this.autorun(() => {
      var selector = { location: this.location.get() };
      this.parties = Parties.find(selector);
    }, true);

    var $sidedrawerEl = $('#sidedrawer');
    var $titleEls = $('strong', $sidedrawerEl);

    $titleEls
      .next()
      .hide();

    $titleEls.on('click', function() {
      $(this).next().slideToggle(200);
    });

    $(document).ready(function() {
      $('.collapsible').collapsible({
        accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
  }

  searchLocation(location) {
    this.subscribe('parties', location, () => {
      if (!this.parties.count()) {
        alert('Nothing found');
      }
    });
    this.location.set(location);
  }

  showSidedrawer() {
    console.log('show');
    var $sidedrawerEl = $('#sidedrawer');
    // show overlay
    var options = {
      onclose: function() {
        $sidedrawerEl
          .removeClass('active')
          .appendTo(document.body);
      }
    };

    var $overlayEl = $(mui.overlay('on', options));

    // show element
    $sidedrawerEl.appendTo($overlayEl);
    setTimeout(function() {
      $sidedrawerEl.addClass('active');
    }, 20);

  }

  hideSidedrawer() {
    var $bodyEl = $('body');
    $bodyEl.toggleClass('hide-sidedrawer');

  }

}
