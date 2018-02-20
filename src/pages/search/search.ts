import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SearchHashPage } from '../search-hash/search-hash'
import { SearchGeolocPage } from '../search-geoloc/search-geoloc'

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  searchHash = SearchHashPage
  searchGeoloc = SearchGeolocPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}
