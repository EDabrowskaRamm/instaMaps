import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CommentsPage } from '../comments/comments';

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

  constructor(public navCtrl: NavController) {

  }

  myPlaces = [
    {
      img: '../../assets/imgs/map.jpg',
      locDescription: 'Default location description',
      likesCount: 0,
      commentsLength: 3
    },
    {
      img: '../../assets/imgs/map.jpg',
      locDescription: 'Default location description2',
      likesCount: 0,
      commentsLength: 1
    },
    {
      img: '../../assets/imgs/map.jpg',
      locDescription: 'Default location description3',
      likesCount: 0,
      commentsLength: 5
    }
  ]


  onFav(event) {
    console.log(event)
    if (this.isActive === "false") {
      this.isActive = "true"
      for (let i = 0; i < this.myPlaces.length; i++) {
        this.myPlaces[i].likesCount++
        
      }
    } else {
      this.isActive = "false"
      for (let i = 0; i < this.myPlaces.length; i++) {
        this.myPlaces[i].likesCount--
      }
    }
  }

  onComment() {
    this.navCtrl.push(CommentsPage)
  }
}
