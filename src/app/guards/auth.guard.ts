import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = ():boolean => {
  const router:Router = inject(Router);
  if(sessionStorage.getItem("userLogged")){
    return true;
  }
  router.navigate(['/Accueil']);
  return false;
};
