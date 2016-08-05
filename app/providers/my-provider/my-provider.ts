import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MyProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MyProvider {
  data: any;
  tasks: any;
  rolls: any;

  constructor(private http: Http) {
    this.data = null;
  }

  loadTasks() {
	/*
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
	*/

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('http://128.199.82.176:3000/tasks/?token=' + window.localStorage.getItem('token'))
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.tasks = data;
          resolve(this.tasks);
        });
    });
  }

  loadRolls() {
	/*
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
	*/

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('http://128.199.82.176:3000/rolls/?token=' + window.localStorage.getItem('token'))
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.rolls = data;
          resolve(this.rolls);
        });
    });
  }
}

