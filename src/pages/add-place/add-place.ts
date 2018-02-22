import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController,
          ToastController} from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { Geolocation } from '@ionic-native/geolocation';

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
  isLocationSet = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private modalCrtl: ModalController,
              private loadingCrtl: LoadingController,
              private toastCrtl: ToastController,
              private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPlacePage');
  }

  onCamera() {
    console.log('good picture');
  }

  onGallery() {
    console.log('picture found');
  }

  onLocate() {
    // show loader before location will be shown
    const loader = this.loadingCrtl.create({
      content: 'Getting your location...'
    });
    loader.present();

    // get and set location
    this.geolocation.getCurrentPosition()
      .then(res => {
        loader.dismiss();
        this.location.lat = res.coords.latitude;
        this.location.lng = res.coords.longitude;
        this.isLocationSet = true;
      })
      .catch(err => {
        loader.dismiss();
        
        // show toast if location can't be get/set
        const toast = this.toastCrtl.create({
          message: 'Could not get your location. Try adding it manually.',
          duration: 2500
        });
        toast.present();
      })
  }

  onMark() {
    // show modal with google map
    const modal = this.modalCrtl.create(SetLocationPage, {
      location: this.location, isSet: this.isLocationSet});
    modal.present();

    // if modal was closed
    modal.onDidDismiss(data => {
      // save data if they where set
      if(data) {
        // dane wyekstrachowane z modala
        this.location = data.location;
        this.isLocationSet = true;
      }
    })
  }

  onSubmit(form: NgForm) {
    console.log('pictire saved and shared');
  }

}
