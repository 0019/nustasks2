// Need to validate token
import {Component} from '@angular/core';
import {Modal, NavController} from 'ionic-angular';
import {TasksService} from '../../providers/tasks-service/tasks-service';
import {AddTask} from '../../pages/add-task/add-task';

//import {Modal, Page, NavController} from 'ionic-angular';
/*
  Generated class for the TasksPagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/tasks-page/tasks-page.html',
  providers: [TasksService]
})

export class TasksPage {
  public tasks: any;

  constructor(private nav: NavController, public tasksService: TasksService) {
  }

  onPageLoaded() {
  	this.loadTasks();
  }

  loadTasks() {
	var arr = [];
  	this.tasksService.load().then(data => {
		data.forEach(function(roll) {
			arr = arr.concat(roll);
		});
		this.tasks = arr;
	});
  }

  addTask() {
  	let modal = Modal.create(AddTask);
	this.nav.present(modal);
  }
}
