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
	  window.localStorage.setItem('token', 'E4FDF44A7C92EA217A3928E5039C0653A576BE75BA3064A657FA19F5640E5E764D019F83537F3B032805AA9A7E6A4DAA8F2F20465EFB6416641BD7C30CEDEB555B4A04C4F159EED635F985E35891C0C0C87588CF93879491648EEE213A2C1A0CEE95C31D6E6560318BBB1D8DAF32D883C94605A95776F535CD6548EB415D5C5D29FC74A90038DD96F64161533BFE21817154948C38349EB6D7D605F73A7F7ED58795FF2A3493E6D26D7E275A9012C4E3C6245D8BEC711D8D80651E302F9FF12DD978820CAA34960C8F5DB53F6919DA5969D71EB0B280758AAAC6704246E9E6174BA2E9A409630DE25196FDBF5A4C39B2');
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
