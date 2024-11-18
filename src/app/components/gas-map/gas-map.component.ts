import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { highlightEconomicStations } from '../maplibre/utils';

@Component({
  selector: 'app-gas-map',
  templateUrl: './gas-map.component.html',
  styleUrl: './gas-map.component.css'
})
export class GasMapComponent {
  constructor(private srvc: BackendService){}
  protected gas_stations: any;


  ngOnInit(): void {
    this.srvc.getGasStations_aws(-66, 18).subscribe((response) => {
      const data = response;
      data.features = highlightEconomicStations(data.features);
      console.log("aws");
      this.gas_stations = data;
      console.log(this.gas_stations);
    });
  }
  loadAllGasStations(){
    this.srvc.getallGasStations().subscribe((response) => {
      const data = response;
      data.features = highlightEconomicStations(data.features);
      console.log("aws");
      this.gas_stations = data;
      console.log(this.gas_stations);
    });
  }

  // Method to handle the list emitted from the child
  receiveListFromChild(list: any) {
    this.gas_stations = {...list};
    console.log('gas stations received from child:', this.gas_stations);
  }

}
