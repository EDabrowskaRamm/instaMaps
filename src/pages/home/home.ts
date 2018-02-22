import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { CommentsPage } from '../comments/comments';
import { Place } from '../../models/place';
import { PlacePage } from '../place/place';

import { PlacesService } from '../../services/places';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // img: string = '../../assets/imgs/map.jpg'
  // locDescription: string = 'Default location description'
  // likesCount: number = 0
  // commentsLength: number = 3
  isActive: string = "false"

  constructor(public navCtrl: NavController, private placesService: PlacesService,
              private modalCrtl: ModalController) {

  }

  myPlaces: Place[] = [ ]

  ionViewWillEnter() {
    this.myPlaces = this.placesService.loadPlaces();
  }


  onFav(event) {
    console.log(event)
    if (this.isActive === "false") {
      this.isActive = "true"
      for (let i = 0; i < this.myPlaces.length; i++) {
        // this.myPlaces[i].likesCount++;
        
      }
    } else {
      this.isActive = "false"
      for (let i = 0; i < this.myPlaces.length; i++) {
        // this.myPlaces[i].likesCount--;
      }
    }
  }

  onComment() {
    this.navCtrl.push(CommentsPage)
  }

  onMap(item: Place, index: number) {
    console.log('show map with this place location');
    const modal = this.modalCrtl.create(PlacePage, {
      place: item,
      index: index
    });
    modal.present();
  }
}
