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
  public map: Map; // MapLibre GL Map object (MapLibre is ran outside angular zone, keep that in mind when binding events from this object)
  @Output() emitter = new EventEmitter<Array<any>>();  



  protected setup(map: Map) {
    this.map = map;
    this.loadGeolocateControl()
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
      this.srvc.getGasStations(e.target._userLocationDotMarker._lngLat.lng, e.target._userLocationDotMarker._lngLat.lat, 4).subscribe((response) => {
        response.features = highlightEconomicStations(response.features);
        console.log(this.gas_stations);
        this.sendGasStationsToParent();
      });
    });

    //automatically locate and show gas stations
    // setTimeout(() => {
    //   geolocate.trigger()
    // }, 3000); 
  }

  public flyToStation(lng: number, lat: number) {
    if (this.map.loaded() == false) return
    this.map.flyTo({ center: [lng, lat], zoom: 17 })
  }

  public sendGasStationsToParent() {
    this.emitter.emit(this.gas_stations);
  }

  protected onLayerClick(e: any): void {
    console.log("Clicked on feature:", e.features[0]);
    const feature = e.features?.[0];
    if (feature) {
      this.selectedFeature = feature;
    }
  }

}
