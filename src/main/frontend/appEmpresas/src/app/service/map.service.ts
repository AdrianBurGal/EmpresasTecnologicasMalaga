import {Injectable} from "@angular/core";
import * as L from "leaflet";

@Injectable({
  providedIn: 'root',
})
export class MapService {

  map: L.Map | undefined;

  showLocation(latitude: number, longitude: number) {
    console.log(latitude)
    this.map = L.map('map').setView([latitude, longitude], 19);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    L.marker([latitude, longitude]).addTo(this.map)
  }
}
