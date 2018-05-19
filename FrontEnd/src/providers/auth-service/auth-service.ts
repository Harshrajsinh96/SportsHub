import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {RestProvider} from '../../providers/rest/rest';

export class User {
  name: string;
  email: string;
  password: string;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

@Injectable()
export class AuthServiceProvider {
  currentUser: User;

  constructor(public restProvider:RestProvider){

  }

  public login(credentials,callback) {

       if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
     
     /* return Observable.create(observer => {
         let access = (credentials.password === "pass" && credentials.email === "email");
         this.currentUser = new User('Emma', 'emma@test.com', 'pass');
         observer.next(access);
         observer.complete();
       });
      */
//TODO: Uncomment for login backend
        
        var obj = this;
       
        this.restProvider.login(credentials).then((result) => { 

         var allowed = false;

         console.log(result);

          // login successfull
          if (typeof result.result !== "undefined") {
              allowed = true;  
              obj.currentUser = new User(result.result.username, result.result.email,result.result.password);  

              // bad boo 
              window['currentUser']  = { name : result.result.username, email : result.result.email, password : result.result.password };
            

              console.log(obj.currentUser);
          } 


          callback(allowed);

      });


    }
  }


  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      this.restProvider.signup(credentials).then((result) => {
        console.log(result);
      }, (err) => {
        console.log(err);
      });
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

 public getUserInfo() : User {
   return this.currentUser;
 }

  public findmatch(credentials) {
    if (credentials.sport === null || credentials.zipcode === null || credentials.level === null) {
      return Observable.throw("Please insert credentials");
    } else {
      this.restProvider.matchfind(credentials).then((result) => {
        console.log(result);
      }, (err) => {
        console.log(err);
      });
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
