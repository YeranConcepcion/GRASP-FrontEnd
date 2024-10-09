import { Component } from '@angular/core';
import { Map } from 'maplibre-gl';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class DisplayMapComponent {
  constructor(private srvc: BackendService){}
  gas_stations : Array<any>;
  // MapLibre GL Map object (MapLibre is ran outside angular zone, keep that in mind when binding events from this object)
  // unused for now, but very handy reference to the map object
  map: Map; 
  loadMap(map:Map){
    this.map = map;
  }

  ngOnInit(): void {
    this.srvc.getGasStations(-66.5, 18.33, 10).subscribe((response)=> {console.log(response)
      this.gas_stations = response.features;
    });
  }
}
