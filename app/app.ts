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
	  //window.localStorage.setItem('token', 'EB1130A263858EA1ABEDFF8BF1AB2F6DBBE329D8ED77F1EB031B19A6B53FC116424C5E72214D30DA6FE81E977DAF4716A7849D47CC554C46C47C10F032E4A57B8589499D52D2876B5AFA6C8EE9DEBA35222A77958DE5457C9BA5F4479A2E15CE5CFFB9A6409F80D81ACEF6FED63E9B2DD738BF864E08B40C1EF6C21A7A1B400F2F6E06DE0828A44EDF0A0C9845F90AA92D68933727932D3B3B00B7A1507A569C7A3642DD4BD4A70638670A0B876438950FE8804E0F4AC1166F36756021E650262D34152E04B20F9DBC4DE00E49BBA1C1233560766078151790B98A890551D7B510569C7ADA2B761E43A463FE19CEE7BC');
	  
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
