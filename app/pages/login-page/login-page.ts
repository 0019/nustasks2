import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {MyApp} from '../../app';
/*
   Generated class for the LoginPagePage page.

   See http://ionicframework.com/docs/v2/components/#navigation for more info on
   Ionic pages and navigation.
 */

@Component({
	templateUrl: 'build/pages/login-page/login-page.html',
})

export class LoginPage {
  private url: any;
  public token: any;
  
  constructor(private nav: NavController, private apiKey: MyApp.apiKey) {
	this.url = 'https://ivle.nus.edu.sg/api/login/?apikey=' + this.apiKey + '&url=nustasks://';
  }
  
  authenticate() {
	this.token = null;
	var target = '_blank';
	var options = 'location=yes';
	var url = this.url;
	ivleRef = window.open(url, target, options);
	var timer = setInterval(() => {
		if (token) {
		  	clearInterval(timer);
			window.localStorage.setItem('token', token);
			this.nav.push(TabsPage);
		}
	}, 500);
  }
}
