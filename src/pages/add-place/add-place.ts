import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController,
          ToastController} from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File, Entry, FileError } from '@ionic-native/file';

// import { AddGalleryPage } from '../add-gallery/add-gallery';
// import { AddPicturePage } from '../add-picture/add-picture';
import { SetLocationPage } from '../set-location/set-location';
import { Location } from '../../models/location';

import { PlacesService } from '../../services/places';

declare var cordova: any;

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

  imageUrl: string = '';
  imageUrlAlt: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private modalCrtl: ModalController,
              private loadingCrtl: LoadingController,
              private toastCrtl: ToastController,
              private geolocation: Geolocation,
              private camera: Camera,
              private file: File,
              private placesService: PlacesService) {
  }

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPlacePage');
  }

  onCamera() {
    console.log('good picture');
    // this will open our camera or 
    this.camera.getPicture(this.options)
      .then(imgData => {
        console.log(imgData);
        // option to allo little photo editing before save
        imgData.allowEdit = true;
        
        // identification of back/slashes so we can reach the end of the string(file name) and replace what's before it with ''
        const currentName = imgData.replace(/^.*[\\\/]/,'');
        // identify the file name and replace it with '' so we get the path
        const path = imgData.replace(/[^\/]*$/, '');
        //
        const newFileName = new Date().getUTCMilliseconds() + '.jpg';

        this.file.moveFile(path, currentName, cordova.file.dataDirectory, newFileName)
          .then((res: Entry) => {
            console.log(res);

            // stores url of newly created img
            this.imageUrl = res.nativeURL;
            this.camera.cleanup();            
          })
          .catch((err: FileError) => {
            console.log(err);
            this.imageUrl = '';
            const toast = this.toastCrtl.create({
              message: 'Image couldn\'t be saved. Please try again.',
              duration: 2500
            });
            toast.present();
            this.camera.cleanup();
          })

        // img.Data.destinationType?? url dla zdjęcia
        this.imageUrl = imgData;

      })
      .catch(err => {
        const toast = this.toastCrtl.create({
          message: 'Could not detect camera.',
          duration: 2500
        });
        toast.present();
      })
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
    console.log(form.value);
    this.placesService
      .addPlace(form.value.title, form.value.description, this.location, this.imageUrl);
    
    form.reset();
    this.location = {
      lat: 63.4187191,
      lng: 10.3687234
    };
    this.imageUrl = '';
    this.isLocationSet = false;
  }

}
