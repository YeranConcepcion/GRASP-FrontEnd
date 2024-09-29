import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  token = '';

  constructor() { }

  //Aqui iria la logica del backend que validaria si un usuario tiene cuenta o no.
  isAuth() {
    return this.token.length > 0;
  }
}
