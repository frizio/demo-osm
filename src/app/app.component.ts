import { Component, OnInit } from '@angular/core';

declare var ol: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  latitude  = 38.5204;
  longitude = 13.8567;

  map: any;


  ngOnInit() {

    //
    this.map = new ol.Map(
      {
        target: 'map',
        layers: [
          new ol.layer.Tile( { source: new ol.source.OSM() } )
        ],
        view:
          new ol.View(
            {
              center: ol.proj.fromLonLat([this.longitude, this.latitude]),
              zoom: 8
            }
          )
      }
    );

    //
    this.map.on(
      'click',
      (args: any) => {
        console.log(args.coordinate);
        const lonlat = ol.proj.transform(args.coordinate, 'EPSG:3857', 'EPSG:4326');
        console.log(lonlat);
        const lon = lonlat[0];
        const lat = lonlat[1];
        alert(`latitude: ${lat} longitude: ${lon}`);
    });

  }

  //
  setCenter() {
    const view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([this.longitude, this.latitude]));
    view.setZoom(8);
  }

}
