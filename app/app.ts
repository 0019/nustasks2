import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {LoginPage} from './pages/login-page/login-page';
import {MyProvider} from './providers/my-provider/my-provider';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  //public apiKey: any;
  //public token: any;

  private rootPage: any;

  constructor(private platform: Platform) {
	  //this.apiKey = 'rSe7yZUlJVbjo95tnZs4i';
	  window.localStorage.setItem('token', '917C31C0B6890C33A2012105F587BCEB93DAF89E0B8F35C0EAA15749AF296B657D1C9B8AF4F34E923A4EFD89C6808747564C2B5B8566F7DF3F0D7AABA58E675DB7FC00F4419AC2D3E6BFA575E5FCBB72DC795E7E14E5A3FF0932AA5501444DAB0ED0158C27D23886E024CA97EF54AC8BA3888143E86F336D85683CCD8F3D34199990E7A0A6AF9ECFC12E7E0738EC1CB3A6862374AA9E7F15EDF8347163FEF3B24DCB22297371CD27788C45967AE784AAA27C4391299E35BB7D207F580F844BEB01AF877373A2E189283655542020B81620AFEE4469110AED1327BD79D1F5C5090EDEDB668ABB5AE02E180D3BB40E6396');
	  //window.localStorage.setItem('token', 'll');
	  //alert(window.localStorage.getItem('token'));
	  
//	 if (window.localStorage.getItem('token').length > 10) {
//		this.rootPage = TabsPage;
//	 } else {
		this.rootPage = LoginPage;//TabsPage;
//	 }

	  platform.ready().then(() => {
		  // Okay, so the platform is ready and our plugins are available.
		  // Here you can do any higher level native things you might need.
		  StatusBar.styleDefault();
	  });
	}
}

ionicBootstrap(MyApp, [MyProvider]);
