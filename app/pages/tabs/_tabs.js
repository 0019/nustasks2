import {Page} from 'ionic-angular';
import {TasksPage} from '../tasks-page/tasks-page';
import {RollsPage} from '../rolls-page/rolls-page';
import {SettingsPage} from '../settings-page/settings-page';
//import {Http} from 'angular2/http';
import {MyApp} from '../../app';
@Page({
	templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  constructor() {
	// this tells the tabs component which Pages
	// should be each tab's root Page
	this.tab1Root = TasksPage;
	this.tab2Root = RollsPage;
	this.tab3Root = SettingsPage;
	//alert(window.localStorage.getItem('token'));
  }
  
  onPageLoaded() {
	var url = 'http://128.199.82.176:3000/tasks/?token=' + token;
	this.http.get(url).subscribe((data) => {
		console.log('get data');
		var raw = data.json();
	});
  }
}
