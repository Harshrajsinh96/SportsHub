import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-matches',
  templateUrl: 'matches.html',
})

export class MatchesPage {
  samples: any;
constructor(private nav: NavController, public restProvider: RestProvider, public nacParams: NavParams) {

    this.samples =
    [
      {"Opponent" : "With (John Doe) ",
      "Level" : "Who Is (Tennis - Beginner)",
      "Time" : "At (6:30 pm)",
        "Place" : "in (St. James Park - San Jose - 95192)"},

    ]
   }

    /** JSOn View Code : https://stackoverflow.com/questions/47872913/reading-content-of-json-file-in-ionic-app?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

    constructor(public http: HttpClient) {
      this.load_entries();
  };

  load_entries(filePath: string) {  //filePath: 'assets/test.json'

      this.http
          .get(filePath)
          .subscribe((data) => {
             console.log(data);
          });
  }*/

public letsPlay()
{
  this.nav.setRoot('ChoosewinnerPage');
}

ionViewDidLoad() {
  console.log('ionViewDidLoad ChooseWinner');
  }
}
