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
  constructor ( private dynamoService : DynamoService) {}
  ngOnInit(): void {
    this.dynamoService.getGasStations().subscribe((fetchedStations) => {
    this.gasStations = fetchedStations;
    console.log(this.gasStations)
    });
    }

}
