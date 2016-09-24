import { Component } from '@angular/core';
import {Page, NavController, NavParams} from 'ionic-angular';
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

	constructor(public navParams: NavParams) {
		this.task = navParams.data;
	}

}
