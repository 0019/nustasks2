import { Component } from '@angular/core';
import {Page, NavController, NavParams} from 'ionic-angular';
/*
   Generated class for the TaskDetailPagePage page.

   See http://ionicframework.com/docs/v2/components/#navigation for more info on
   Ionic pages and navigation.
 */
@Component({
templateUrl: 'build/pages/forum-detail-page/forum-detail-page.html',
})

export class ForumDetailPage {
	forum: any;

	constructor(public navParams: NavParams) {
		this.forum = navParams.data;
	}
}
