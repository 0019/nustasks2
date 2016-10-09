import { Component } from '@angular/core';
import {Page, NavController, NavParams} from 'ionic-angular';
import {ForumDetailPage} from '../forum-detail-page/forum-detail-page';
import {MyProvider} from '../../providers/my-provider/my-provider';
/*
   Generated class for the TaskDetailPagePage page.

   See http://ionicframework.com/docs/v2/components/#navigation for more info on
   Ionic pages and navigation.
 */
@Component({
templateUrl: 'build/pages/task-detail-page/task-detail-page.html',
})

export class TaskDetailPage {
	task: any;

	constructor(public navParams: NavParams,private nav: NavController, public myProvider: MyProvider) {
		this.task = navParams.data;
	}

	getForumData(tastTitle){
		var forumData: any;
		return forumData;
	}

	goToForumDetails(forumData) {
		// go to the session detail page
		// and pass in the session data
		this.nav.push(ForumDetailPage, forumData);
	}

}
