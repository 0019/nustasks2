import {Component} from '@angular/core';
import {Modal, NavController, ViewController} from 'ionic-angular';
import {MyProvider} from '../../providers/my-provider/my-provider';
import {AddTaskService} from '../../providers/add-task-service/add-task-service';

/*
  Generated class for the AddTask component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  templateUrl: 'build/pages/add-task/add-task.html',
  providers: [AddTaskService]
})
export class AddTask {
  private duedate: any;
  private duetime: any;
  private details: any;
  private course: any;
  private rolls: any;
  private title: any;

  constructor(private viewCtrl: ViewController, private myProvider: MyProvider, private addTaskService: AddTaskService) {
  	this.viewCtrl = viewCtrl;
  	this.populateRolls();
  }

  populateRolls() {
	this.myProvider.loadRolls().then(data => {
	   	this.rolls = data;
		console.log(this.rolls);
	});
  }

  submit() {
	console.log('Course ' + this.course);
	this.addTaskService.load(encodeURIComponent(this.course), encodeURIComponent(this.title), encodeURIComponent(this.details), encodeURIComponent(this.duedate), encodeURIComponent(this.duetime)).then(data => {
		this.viewCtrl.dismiss();
	});
  }

  cancel() {
	this.viewCtrl.dismiss();
  }
}
