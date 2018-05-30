import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})

export class StatsPage {
  samples: any;

constructor(private nav: NavController, public restProvider: RestProvider, public nacParams: NavParams) {

    this.samples =
    [
      {"badmintonWon" : "0",
      "badmintonLost" : "0",
      "tennisWon" : "1",
      "tennisLost" : "0"},
    ]

   }

public Home() {
  this.nav.setRoot('HomePage')
}

ionViewDidLoad() {
  console.log('ionViewDidLoad StatsPage');
}
}
