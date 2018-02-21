import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AgmCoreModule } from '@agm/core';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CommentsPage } from '../pages/comments/comments';
import { TabsPage } from '../pages/tabs/tabs';
import { AddPlacePage } from '../pages/add-place/add-place';
import { SetLocationPage } from '../pages/set-location/set-location';
import { AddGalleryPage } from '../pages/add-gallery/add-gallery';
import { AddPicturePage } from '../pages/add-picture/add-picture';
import { SearchPage } from '../pages/search/search';
import { SearchHashPage } from '../pages/search-hash/search-hash'
import { SearchGeolocPage } from '../pages/search-geoloc/search-geoloc'
import { SettingsPage } from '../pages/settings/settings';


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
    SetLocationPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBlLT6teEaUN0mwbj48O4vYwfRhQKudSgE'
    })
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
    SetLocationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
