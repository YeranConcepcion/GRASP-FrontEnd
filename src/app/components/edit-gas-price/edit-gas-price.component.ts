import { Component, OnInit } from '@angular/core'
import { DynamoService } from '../../services/dynamo.service'
import { GasStations } from '../../models/gas-stations'

@Component({
  selector: 'app-edit-gas-price',
  templateUrl: './edit-gas-price.component.html',
  styleUrl: './edit-gas-price.component.css'
})
export class EditGasPriceComponent implements OnInit{
  gasStations : GasStations[] = []
  gasPriceForm : GasStations = new GasStations();
  constructor ( private dynamoService : DynamoService) {}
  ngOnInit(): void {
    this.dynamoService.getGasStations().subscribe((fetchedStations) => {
    this.gasStations = fetchedStations;
    // console.log(this.gasStations)
    });
    this.updatePrice()
  }
  updatePrice(){
    var station = new GasStations()
    station.Station_ID = "228"
    station.Station_Gas_Price = "99.5"
    console.log(station)
    this.dynamoService.updateGasPrice(station).subscribe(({
      next : (message) =>{
       

      },
      error:(err)=>{
        console.log(err)
      }
    }))
  }
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
    } else {
      console.log('Form is invalid.');
    }
  }

}
