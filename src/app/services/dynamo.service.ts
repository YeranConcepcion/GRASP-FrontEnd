import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GasStations } from "../models/gas-stations"
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DynamoService {
  private GETGASSTATIONS = environment.GETGASSTATIONS

  constructor(private http: HttpClient) { }
  getGasStations(): Observable<GasStations[]> {
    return this.http.get<GasStations[]>(this.GETGASSTATIONS);
    }
}
