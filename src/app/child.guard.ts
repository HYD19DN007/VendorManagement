import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChildGuard implements CanActivateChild {
  constructor(private auth:AuthService,private route:Router){}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
    if(this.auth.CheckAdmin())
    {
      return true;
    }
    else
    {
     // this.route.navigate(['unauthorised']);
     return false;
    }
  }
  
}
