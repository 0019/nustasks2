import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RollsService} from '../../providers/rolls-service/rolls-service';

/*
  Generated class for the RollsPagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/rolls-page/rolls-page.html',
  providers: [RollsService]
})
export class RollsPage {
  public rolls: any;

  constructor(private nav: NavController, public rollsService: RollsService) {
  }

  onPageLoaded() {
	this.loadRolls();
  }

  loadRolls() {
  	this.rollsService.load().then(data => {
		this.rolls = data[0].syncrolls;
		console.log(this.rolls);
	});
  }
}
