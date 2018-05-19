import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-choosewinner',
  templateUrl: 'choosewinner.html',
})

export class ChoosewinnerPage {
  winnerCredentials = {winner: ''};

constructor(private nav: NavController, public restProvider: RestProvider, public nacParams: NavParams) { }

public winner() {
  this.nav.setRoot('StatsPage');
}

ionViewDidLoad() {
  console.log('ionViewDidLoad ChoosewinnerPage');
}
}
