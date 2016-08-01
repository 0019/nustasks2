// Need to validate token
import {Component} from '@angular/core';
import {Modal, NavController} from 'ionic-angular';
import {MyProvider} from '../../providers/my-provider/my-provider';
import {AddTask} from '../../pages/add-task/add-task';

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

  constructor(private nav: NavController, public myProvider: MyProvider) {
  }

  onPageLoaded() {
  	this.loadTasks();
  }

  loadTasks() {
	var arr = [];
  	this.myProvider.loadTasks().then(data => {
		for (var i = 0; i < (<any>data).length; i++) {
			arr = arr.concat(data[i]);
		}
		this.tasks = arr;
	});
  }

  addTask() {
  	let modal = Modal.create(AddTask);
	this.nav.present(modal);
  }
}
