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
	  window.localStorage.setItem('token', '65DF105C80543881A16EB2BE5C1E1AFCB92E26D381C6BA608BD2D8DDD154FFB90603588E0BE43F6C9A1C112237971E58B841884AAF2CB3444D221BFEA484931D00B1984FF71A0D851C5C33A291719615AED034866E7794B2143D64B213B99E4E26DA2C03210A38510CDCC358CC1BA0A9B18C1522D366C040B26BBB966C536D819225D2F4EBB9FD464D2A4AAAAB4DB1436B5AFB10009EF4767E8005574309AA2FBEA8A50D3AE6D458CBBDF2B8B57537C45BE25335D87D1B00A70782C2D59817907252A26F40D2313FB54989A79C00B39F9EC7AC2ADE366312B971C63AA7D43DA9AF272A36898B0E891FBF1D43A5FBECBB');
	  
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
