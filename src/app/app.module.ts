import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CommentsPage } from '../pages/comments/comments';
import { TabsPage } from '../pages/tabs/tabs';
import { AddPlacePage } from '../pages/add-place/add-place';
import { SearchPage } from '../pages/search/search';
import { SearchHashPage } from '../pages/search-hash/search-hash'
import { SearchGeolocPage } from '../pages/search-geoloc/search-geoloc'

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    CommentsPage,
    AddPlacePage,
    SearchPage,
    SearchHashPage,
    SearchGeolocPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    SearchGeolocPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
