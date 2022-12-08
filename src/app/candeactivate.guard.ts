import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, windowWhen } from 'rxjs';
import { CreateVendorComponent } from './create-vendor/create-vendor.component';

@Injectable({
  providedIn: 'root'
})
export class CandeactivateGuard implements CanDeactivate<CreateVendorComponent> {
  canDeactivate(
    component: CreateVendorComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean{
    if(component.isDirty)
    {
      return window.confirm("Are you sure you want to leave the page");
    }
    return true;

  }
  
}
