import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

// import { AddGalleryPage } from '../add-gallery/add-gallery';
// import { AddPicturePage } from '../add-picture/add-picture';
import { SetLocationPage } from '../set-location/set-location';
import { Location } from '../../models/location';

@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {

  // addGallery = AddGalleryPage;
  // addPicture = AddPicturePage;
  location: Location = {
    lat: 63.4187191,
    lng: 10.3687234
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private modalCrtl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPlacePage');
  }

  onCamera() {
    console.log('good picture');
    const modal = this.modalCrtl.create(SetLocationPage, {location: this.location});
    modal.present();
  }

  onGallery() {
    console.log('picture found');
  }

  onLocate() {
    console.log('locate me');
  }

  onMark() {
    console.log('mark on map');
  }

  onSubmit(form: NgForm) {
    console.log('pictire saved and shared');
  }

}
