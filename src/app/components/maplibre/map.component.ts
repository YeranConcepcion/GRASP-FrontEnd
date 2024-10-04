import { Component } from '@angular/core';
import { NgxMapLibreGLModule, MovingOptions } from '@maplibre/ngx-maplibre-gl';
import { Map } from 'maplibre-gl';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class DisplayMapComponent {
  map: Map; // MapLibre GL Map object (MapLibre is ran outside angular zone, keep that in mind when binding events from this object)
  loadMap(map:Map){
    this.map = map;
  }
}
