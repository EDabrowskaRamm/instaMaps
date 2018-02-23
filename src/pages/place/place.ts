import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { Place } from '../../models/place';
import { PlacesService } from '../../services/places';

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {

  place: Place;
  index: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private viewCrtl: ViewController,
              private placesService: PlacesService) {
    this.place = this.navParams.get('place');
    this.index = this.navParams.get('index');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }

  onClose() {
    this.viewCrtl.dismiss();
  }

  onDelete() {
    this.placesService.deletePlace(this.index);
    // this.onLeave(); nie wiem co to/ po za tym nie działa
    this.viewCrtl.dismiss();
  }

}
