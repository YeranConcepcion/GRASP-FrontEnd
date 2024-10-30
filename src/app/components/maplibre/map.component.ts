import { Component } from '@angular/core';
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
  gas_stations: Array<any>;
  protected min_price: number

  // MapLibre GL Map object (MapLibre is ran outside angular zone, keep that in mind when binding events from this object)
  // unused for now, but very handy reference to the map object
  map: Map;
  protected setup(map: Map) {
    this.map = map;
    this.loadGeolocateControl()
  }

  protected loadGeolocateControl(){
    let geolocate = new GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    });
    this.map.addControl(geolocate);

    //automatically locate and show gas stations
    // setTimeout(() => {
    //   geolocate.trigger()
      
    // }, 3000); 
    
    // Set an event listener that fires
    // when a trackuserlocationend event occurs.
    geolocate.on('trackuserlocationend', (e) => {
      console.log('A trackuserlocationend event has occurred.')
      console.log(e.target._userLocationDotMarker._lngLat.lat)
      console.log(e.target._userLocationDotMarker._lngLat.lng)
      this.srvc.getGasStations(e.target._userLocationDotMarker._lngLat.lng, e.target._userLocationDotMarker._lngLat.lat, 4).subscribe((response) => {
        this.gas_stations = highlightEconomicStations(response.features)
        console.log(this.gas_stations);
      });
    });
  }

  ngOnInit(): void {
    this.srvc.getGasStations(-66,18, 10).subscribe((response) => {    
      this.gas_stations = highlightEconomicStations(response.features)
      console.log(this.gas_stations);
      });      
    
  }

  public flyToStation(lng: number, lat: number) {
    if (this.map.loaded() == false) return
    this.map.flyTo({ center: [lng, lat], zoom: 17 })
  }


}
