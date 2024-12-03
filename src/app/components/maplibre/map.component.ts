import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GeolocateControl, Map } from 'maplibre-gl';
import { BackendService } from '../../services/backend.service';
import { highlightEconomicStations } from './utils';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class DisplayMapComponent {

  constructor(private srvc: BackendService) { }
  @Input() gas_stations: any;
  protected imageLoaded = false;
  protected selectedFeature: any;
  protected min_price: number
  private map: Map; // MapLibre GL Map object (MapLibre is ran outside angular zone, keep that in mind when binding events from this object)
  @Output() emitter = new EventEmitter<Map>();



  protected setup(map: Map) {
    this.map = map;
    this.loadGeolocateControl()
    this.emitMap();
  }

  private loadGeolocateControl() {
    let geolocate = new GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    });
    this.map.addControl(geolocate);

    // Set an event listener that fires
    // when a trackuserlocationend event occurs.
    geolocate.on('trackuserlocationend', (e) => {
      console.log('A trackuserlocationend event has occurred.');
      console.log(e.target._userLocationDotMarker._lngLat.lat);
      console.log(e.target._userLocationDotMarker._lngLat.lng);
    });

    //automatically locate and show gas stations
    // setTimeout(() => {
    //   geolocate.trigger()
    // }, 3000); 
  }

  protected onLayerClick(e: any): void {
    console.log("Clicked on feature:", e.features[0]);
    const feature = e.features?.[0];
    if (feature!=undefined) {
      this.selectedFeature = feature;
    }
  }

  public emitMap() {
    this.emitter.emit(this.map);
  }

  goToGMap() {
    if(this.selectedFeature._geometry){
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${this.selectedFeature._geometry.coordinates[1]},${this.selectedFeature._geometry.coordinates[0]}`)
    }
  }
}
