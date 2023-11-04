import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if(sessionStorage.getItem("userLogged")){
    return true;
  }
  router.navigate(['/Accueil']);
  return false;
};
