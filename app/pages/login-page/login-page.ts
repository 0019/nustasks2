import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
//import {MyApp} from '../../app';
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
  private ivleRef: any;
  public token: any;
  public apiKey: any;
  
  constructor(private nav: NavController) {
	this.apiKey = 'rSe7yZUlJVbjo95tnZs4i';
	this.url = 'https://ivle.nus.edu.sg/api/login/?apikey=' + this.apiKey + '&url=nustasks://';
  }

  onPageLoaded() {
	var timer = setInterval(() => {
		if (window.localStorage.getItem('token').length > 10) {
			alert('got token in login page');
			if (typeof this.ivleRef != 'undefined')
				this.ivleRef.close();
		  	clearInterval(timer);
			this.nav.push(TabsPage);
		}
	}, 500);
  }

  authenticate() {
	this.token = null;
	var target = '_blank';
	var options = 'location=yes';
	var url = this.url;
	this.ivleRef = window.open(url, target, options);
  }
/*
  handleOpenUrl(url) {
	var index = url.indexOf('=') + 1;
	this.token = url.slice(index, url.length);
	this.ivleRef.close();
  }
  */
}
