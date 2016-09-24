import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MyProvider} from '../../providers/my-provider/my-provider';

/*
   Generated class for the RollsPagePage page.

   See http://ionicframework.com/docs/v2/components/#navigation for more info on
   Ionic pages and navigation.
 */
@Component({
templateUrl: 'build/pages/rolls-page/rolls-page.html',
})
export class RollsPage {
	private rolls: any;

	constructor(private nav: NavController, private myProvider: MyProvider) {
	}

	onPageLoaded() {
		this.loadRolls();
	}

	loadRolls() {
		this.myProvider.loadRolls().then(data => {
				this.rolls = data;
				console.log(this.rolls);
				});
	}
}
