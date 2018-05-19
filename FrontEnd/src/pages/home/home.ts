import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, AlertController} from 'ionic-angular';
import {FormBuilder, FormGroup} from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { RestProvider } from '../../providers/rest/rest';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  createSuccess = false;
  //useremail: string;
  matchCredentials = {sport: '', level: '', time: '', zipcode: '' };


  constructor(private nav: NavController, public restProvider: RestProvider, public nacParams: NavParams, private alertCtrl: AlertController, private formBuilder: FormBuilder, private auth: AuthServiceProvider) {
  //let info = this.auth.getUserInfo();
  //this.useremail = info['email'];
 }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }

  public stats() {
    this.nav.push('StatsPage');
  }

findmatch() {
 let user = this.auth.getUserInfo();
  
  user = window['currentUser'];

  this.nav.setRoot('MatchesPage')
  this.auth.findmatch(this.matchCredentials).subscribe(success => {
    if (success) {
      this.createSuccess = true;
      this.showPopup("Success", "Looking for Matches");
    } else {
      this.showPopup("Error", "Problem creating matches");
    }
  },
    error => {
      this.showPopup("Error", error);
    });
}


  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
}
