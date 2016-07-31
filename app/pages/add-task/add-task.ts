import {Component} from '@angular/core';
import {Modal, NavController, ViewController} from 'ionic-angular';

/*
  Generated class for the AddTask component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  templateUrl: 'build/pages/add-task/add-task.html'
})
export class AddTask {
  constructor(private viewCtrl: ViewController) {
  	this.viewCtrl = viewCtrl;
  }

  close() {
  	this.viewCtrl.dismiss();
  }
}
