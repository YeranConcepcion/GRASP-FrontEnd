import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  private apiUrl : string = 'https://affordable-gas-map-web-server-64d80cf2ea37.herokuapp.com/';
  
  constructor(private http: HttpClient) {}

  // GET request
  getGasStations(lng:number, lat:number, rad:number): Observable<any> {
    
    return this.http.get(`${this.apiUrl}`, 
      {
        params : {
          lng: lng,
          lat: lat,
          rad: rad
  }}
);
  }

  // POST request
  sendData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/submit-endpoint`, data);
  }

// GET request
getGasStations_aws(lng:number, lat:number): Observable<any> {
    
  return this.http.get(environment.GETCLOSESTGASSTATION, 
    {
      params : {
        lng: lng,
        lat: lat,
}}
);
}
// GET request
getallGasStations(): Observable<any> {
  return this.http.get(environment.GETGASSTATIONS);
}
}
