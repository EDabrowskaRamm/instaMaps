import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';

import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CommentsPage } from '../pages/comments/comments';
import { PlacePage } from '../pages/place/place';
import { TabsPage } from '../pages/tabs/tabs';
import { AddPlacePage } from '../pages/add-place/add-place';
import { SetLocationPage } from '../pages/set-location/set-location';
import { AddGalleryPage } from '../pages/add-gallery/add-gallery';
import { AddPicturePage } from '../pages/add-picture/add-picture';
import { SearchPage } from '../pages/search/search';
import { SearchHashPage } from '../pages/search-hash/search-hash'
import { SearchGeolocPage } from '../pages/search-geoloc/search-geoloc'
import { SettingsPage } from '../pages/settings/settings';

import { PlacesService } from '../services/places';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    CommentsPage,
    AddPlacePage,
    SearchPage,
    SearchHashPage,
    SearchGeolocPage,
    SettingsPage,
    AddGalleryPage,
    AddPicturePage,
    SetLocationPage,
    PlacePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBlLT6teEaUN0mwbj48O4vYwfRhQKudSgE'
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    CommentsPage,
    AddPlacePage,
    SearchPage,
    SearchHashPage,
    SearchGeolocPage,
    SettingsPage,
    AddGalleryPage,
    AddPicturePage,
    SetLocationPage,
    PlacePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    File,
    // Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlacesService
  ]
})
export class AppModule {}
