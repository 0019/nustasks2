import {Component} from '@angular/core';
import {Modal, NavController, ViewController} from 'ionic-angular';
import {RollsService} from '../../providers/rolls-service/rolls-service';
import {AddTaskService} from '../../providers/add-task-service/add-task-service';

/*
  Generated class for the AddTask component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  templateUrl: 'build/pages/add-task/add-task.html',
  providers: [RollsService, AddTaskService]
})
export class AddTask {
  private duedate: any;
  private duetime: any;
  private details: any;
  private course: any;
  private rolls: any;
  private title: any;

  constructor(private viewCtrl: ViewController, private rollsService: RollsService, private addTaskService: AddTaskService) {
  	this.viewCtrl = viewCtrl;
  	this.populateRolls();
  }

  populateRolls() {
	this.rollsService.load().then(data => {
	   	this.rolls = data[0].syncrolls;
	});
  }

  submit() {
	console.log(this.course);
	console.log(this.title);
	console.log(this.details);
	this.addTaskService.load(encodeURI(this.course), encodeURI(this.title), encodeURI(this.details), encodeURI(this.duedate), encodeURI(this.duetime)).then(data => {
		this.viewCtrl.dismiss();
	});
  }

  cancel() {
	this.viewCtrl.dismiss();
  }
}
