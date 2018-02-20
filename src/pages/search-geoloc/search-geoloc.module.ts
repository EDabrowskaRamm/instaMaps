import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchGeolocPage } from './search-geoloc';

@NgModule({
  declarations: [
    SearchGeolocPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchGeolocPage),
  ],
})
export class SearchGeolocPageModule {}
