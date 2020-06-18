import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class GuardService implements CanActivate {
  

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    // implement according to your need
    if (sessionStorage.getItem("uEmail") == null){
      this.router.navigate(['/login'])
      return false;
    }else {
      return true;
    }

  }
  constructor(private router : Router) {
    
   }

  

}
