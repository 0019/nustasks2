// Need to validate token
import {Component} from '@angular/core';
import {Modal, NavController} from 'ionic-angular';
import {MyProvider} from '../../providers/my-provider/my-provider';
import {AddTask} from '../../pages/add-task/add-task';
import {TaskDetailPage} from '../task-detail-page/task-detail-page';

//import {Modal, Page, NavController} from 'ionic-angular';
/*
   Generated class for the TasksPagePage page.

   See http://ionicframework.com/docs/v2/components/#navigation for more info on
   Ionic pages and navigation.
 */
@Component({
templateUrl: 'build/pages/tasks-page/tasks-page.html',
})

export class TasksPage {
	public tasks: any;
	public length: any;

	constructor(private nav: NavController, public myProvider: MyProvider) {
	}

	onPageLoaded() {
		this.loadTasks();
	}

	loadTasks() {
		//var arr = [];
		this.myProvider.loadTasks().then(data => {

				this.tasks = data;
				var that = this;
				this.updateTimeleft(this.tasks);
				var interval = setInterval(function() {
					that.updateTimeleft(that.tasks);
					}, 1000);
				this.length=this.tasks.length;
				console.log(this.length);
				});
		
	}

	updateTimeleft(tasks) {
		tasks.forEach(function(task) {
				var due: any;
				var time: any;
				var hs: any;
				var s: any;
				var m: any;
				var h: any;
				var d: any;

				due = new Date(task.deadline);
				time = due - Date.now();
				//hs = ('0' + Math.floor(time % 1000 / 10)).slice(-2);
				s = ('0' + Math.floor(time / 1000) % 60).slice(-2);
				m = ('0' + Math.floor(time / 1000 / 60) % 60).slice(-2);
				h = ('0' + Math.floor(time / 1000 / 60 / 60) % 24).slice(-2);
				d = Math.floor(time / 1000 / 60 / 60 / 24);
				task.timeleft = (d == 0? "" : d + " Day" + (d < 2 ? "":"s") + ", ") + h + ":" + m + ":" + s;
				if (time < 0) {
				task.timeleft = "Mission failed.";
				}
				});
	}

	addTask() {
		let modal = Modal.create(AddTask);
		this.nav.present(modal);
	}

	goToTaskDetail(taskData) {
		// go to the session detail page
		// and pass in the session data
		this.nav.push(TaskDetailPage, taskData);
	}
}
