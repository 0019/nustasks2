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
  private timer: any;
  public token: any;
  public apiKey: any;
  
  constructor(private nav: NavController) {
	this.apiKey = 'rSe7yZUlJVbjo95tnZs4i';
	this.url = 'https://ivle.nus.edu.sg/api/login/?apikey=' + this.apiKey + '&url=nustasks://';
  	this.ivleRef = null;
	this.timer = null;
  }

  onPageLoaded() {
	if (window.localStorage.getItem('token').length > 0) {
		this.nav.push(TabsPage);
	}
  }

  checkLoginStatus() {
  }

  authenticate() {
	if (this.timer != null) {
		clearInterval(this.timer);
	}
	var target = '_blank';
	var options = 'location=yes';
	var url = this.url;
	this.ivleRef = window.open(url, target, options);
	
	this.timer = setInterval(() => {
		if (window.localStorage.getItem('token').length > 10) {
		  	clearInterval(this.timer);
			if (typeof this.ivleRef != 'undefined')
				this.ivleRef.close();
			this.nav.push(TabsPage); //it must have pushed a few times here. remember the bug
		}
	}, 2000);
  }
/*
  handleOpenUrl(url) {
	var index = url.indexOf('=') + 1;
	this.token = url.slice(index, url.length);
	this.ivleRef.close();
  }
  */
}
