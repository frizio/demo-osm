import { Component } from '@angular/core';
import { tileLayer, latLng, circle, polygon } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  options = {
    layers: [
      tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          maxZoom: 18,
          attribution: '&copy; OpenStreetMap contributors'
        }
      )
    ],
    zoom: 5,
    center: latLng(38.1234, 13.1234)
  };

}
