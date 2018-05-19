import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'http://localhost:3000';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

/*  getUsers() {
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/users').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}*/

signup(data) {

  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'/signup', data).pipe(
      map(res => res)
    ).subscribe(response => {
       resolve(response);
      console.log('POST Response:', response);
    });
  });
}

matchfind(data) {
  return new Promise((resolve, reject) => {
  this.http.post(this.apiUrl+'/playGame', data).pipe(
    map(res => res)
  ).subscribe(response => {
     resolve(response);
    console.log('POST Response:', response);
  });
});
}

//TODO: Uncomment for login backend
login(data,callback) {
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'/login', data).pipe(
      map(res => res)
    ).subscribe(response => {
         resolve(response);
    });
  });
}

}
