import { Component } from '@angular/core';

@Component({
  selector: 'app-gas-map',
  templateUrl: './gas-map.component.html',
  styleUrl: './gas-map.component.css'
})
export class GasMapComponent {
  protected receivedList: any;

  // Method to handle the list emitted from the child
  receiveListFromChild(list: any) {
    this.receivedList = list;
    console.log('gas stations received from child:', this.receivedList);
  }

}
