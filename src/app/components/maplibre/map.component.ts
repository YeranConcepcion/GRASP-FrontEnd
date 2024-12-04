import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GeolocateControl, Map } from 'maplibre-gl';
import { BackendService } from '../../services/backend.service';
import { highlightEconomicStations } from './utils';
import { DynamoService } from '../../services/dynamo.service'
import { GasStations } from '../../models/gas-stations'
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class DisplayMapComponent {

  constructor(private srvc: BackendService,  private dynamoService : DynamoService) { }
  @Input() gas_stations: any;
  protected imageLoaded = false;
  protected selectedFeature: any;
  protected min_price: number
  selectedGasStaion = new GasStations()
  gasPriceForm : GasStations = new GasStations();
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
  updatePrice(){
  
    this.dynamoService.updateGasPrice(this.selectedGasStaion).subscribe(({
      next : (message) =>{
        console.log("Price Updated")
       

      },
      error:(err)=>{
        console.log(err)
      }
    }))
  }
  onSubmit(form: any) {
    if (form.valid) {
      this.updatePrice()
    } else {
      console.log('Form is invalid.');
    }
  }
  feedDataEditPrice(givenGasStation:any){
   
    this.selectedGasStaion.Station_Name = givenGasStation.properties.Station_Name
    this.selectedGasStaion.Station_ID = givenGasStation.properties.Station_ID
    this.selectedGasStaion.Station_Diesel_Price = givenGasStation.properties.Station_Diesel_Price
    this.selectedGasStaion.Station_Gas_Price = givenGasStation.properties.Station_Gas_Price
    this.selectedGasStaion.Station_Premium_Price = givenGasStation.properties.Station_Premium_Price
    this.selectedGasStaion.priceHighlight = givenGasStation.properties.priceHighlight
    this.selectedGasStaion.Station_City = givenGasStation.properties.Station_City
    console.log(this.selectedGasStaion)




  }
  closeEditGasPrice(form: any) {
    form.resetForm();
    this.gasPriceForm = new GasStations()
    this.selectedGasStaion = new GasStations()
  
  }
}
