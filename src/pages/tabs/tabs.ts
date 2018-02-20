import { Component } from '@angular/core'

import { HomePage } from '../home/home'
import { AddPlacePage } from '../add-place/add-place'
import { SearchPage } from '../search/search'

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs selectedIndex="1">
      <ion-tab [root]="addPlace" tabIcon="add"></ion-tab>
      <ion-tab [root]="homePage" tabIcon="home" ></ion-tab>
      <ion-tab [root]="search" tabIcon="search"></ion-tab>   
    </ion-tabs>
  `
})
export class TabsPage {
  homePage = HomePage
  addPlace = AddPlacePage
  search = SearchPage
}
