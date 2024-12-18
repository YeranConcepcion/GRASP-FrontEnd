import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { GasStations } from "../models/gas-stations"
import { environment } from '../../environments/environment';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class DynamoService {
  private GETGASSTATIONS = environment.GETGASSTATIONS
  private UPDATEGASPRICE = environment.UPDATEGASPRICE
  private GETADMINS = environment.GETADMINS

  constructor(private http: HttpClient) { }
  getGasStations(): Observable<GasStations[]> {
    return this.http.get<GasStations[]>(this.GETGASSTATIONS);
    }

    getAdmins(): Observable<Users[]> {
      return this.http.get<Users[]>(this.GETADMINS).pipe(
        map((response: any) => {
          // Parse the string if it's still in JSON format
          return JSON.parse(response); 
    
        })
      );
    }
    
  updateGasPrice(station:GasStations){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    console.log(station, "in service")
    return this.http.post(this.UPDATEGASPRICE,JSON.stringify(station),{headers}).pipe(
      tap(_ => console.log("Updated Gas Station Price"))
    )
    
  }
}
