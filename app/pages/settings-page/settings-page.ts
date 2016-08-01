import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
  Generated class for the SettingsPagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/settings-page/settings-page.html',
})
export class SettingsPage {
  constructor(private nav: NavController) {
    this.nav = nav;
  }

  logout() {
  	window.localStorage.removeItem('token');
	this.nav.pop();
  }
}
