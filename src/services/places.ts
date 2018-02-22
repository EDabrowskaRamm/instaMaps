import { Place } from "../models/place";
import { Location } from "../models/location";


export class PlacesService {
  private places: Place[] = [];
  
  // function to save added places
  addPlace(title: string, description: string, location: Location, imgUrl: string) {
    const place = new Place(title, description, location, imgUrl);

    this.places.push(place);
  }
  
  // function to load retrive places
  loadPlaces() {
    // return copy of places array
    return this.places.slice();
  }

  // function to remove a place from the array
  deletePlace(index: number) {
    this.places.splice(index, 1);
  }
}