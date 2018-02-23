import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { File } from '@ionic-native/file';

import { Place } from "../models/place";
import { Location } from "../models/location";

declare var cordova: any;

@Injectable()
export class PlacesService {
  private places: Place[] = [];

  constructor(private storage: Storage, private file: File) {}
  
  // function to save added places
  addPlace(title: string, description: string, location: Location, imgUrl: string) {
    const place = new Place(title, description, location, imgUrl);

    this.places.push(place);

    // storing places array to storage
    this.storage.set('places', this.places)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
        // remove sth that isn't really in our app
        this.places.splice(this.places.indexOf(place), 1);
      });
  }
  
  // function to load retrive places
  loadPlaces() {
    // return copy of places array
    return this.places.slice();
  }

  fetchPlaces() {
    return this.storage.get('places')
      .then((res: Place[]) => {
        console.log(res)
        // get places array if it exists
        this.places = res != null ? res : [];
        return this.places.slice();
      })
      .catch(err => {
        console.log(err);
      });
  }

  // function to remove a place from the array
  deletePlace(index: number) {
    const place = this.places[index];

    this.places.splice(index, 1);
    // deleting place by updating places array
    this.storage.set('places', this.places)
      .then(res => {
        console.log(res);

        this.removeFile(place);
      })
      .catch(err => {
        console.log(err);
      });
  }

  private removeFile(place: Place) {
    const currentName = place.imgUrl.replace(/^.*[\\\/]/,'');
  
    this.file.removeFile(cordova.file.dataDirectory, currentName)
      .then(res => {
        console.log(res);        
      })
      .catch(err => {
        console.log(err);
        // if removing go wrong we need to add this place to array again
        this.addPlace(place.title, place.description, place.location, place.imgUrl);   
      })
  }
}
