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
    this.length = (this.tasks).length;
		/*
		this.noTask = "";
		if (this.tasks.length == 0) {
			this.noTask = "";
		}
		*/
		console.log(data);
		/*
		for (var i = 0; i < (<any>data).length; i++) {
			for (var j = 0; j < (<any>data[i][0]).length; j++) {
				data[i][0][j] = [data[i][0][j], data[i][1]];
			}
			arr = arr.concat(data[i][0]);
		}
		*/
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
