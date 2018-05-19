import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import {RestProvider} from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { email: '', password: '' };

  constructor(private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController,public restProvider:RestProvider) { }

  public createAccount() {
    this.nav.push('RegisterPage');
  }

  public login() {
    this.showLoading()

    var obj = this;

    this.auth.login(this.registerCredentials,function(allowed){

         if (allowed) {
            obj.nav.setRoot('HomePage');
            //this.data = result;
          } else {
            obj.showError("Access Denied");
          }


    });

  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }
}
