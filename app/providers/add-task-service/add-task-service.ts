import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AddTaskService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AddTaskService {
  data: any;
  private title: any;
  private course: any;
  private details: any;
  private duedate: any;
  private duetime: any;

  constructor(private http: Http) {
    this.data = null;
  }

  load(course, title, details, due) {
    /*
	if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
	*/
	var token = window.localStorage.getItem('token');
	var url = 'contents=' + details + '&roll=' + course + '&title=' + title + '&duetime=' + due + '&token=' + token;
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('http://128.199.82.176:3000/tasks/addTask/?' + url)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });
  }
}

