import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  //Inyectamos el servicio de auth
  const authService = inject(AuthService)

  //Inyectamos el router para redirigir en case que no este auth
  const router = inject(Router)


  if(authService.isAuth()){

    return true
  }
  else{
    router.navigateByUrl("/")
    return false
  }
  
};
