import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Vendor } from './Vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {

  private baseurl="http://localhost:9090/";
  constructor(private http:HttpClient) { }
  getVendors():Observable<Vendor[]>
  {
    return this.http.get<Vendor[]>(this.baseurl+"getVendors");
  }
  
  getVendorById(vendorId:number):Observable<Vendor>
  {
    return this.http.get<Vendor>(this.baseurl+"getById/"+vendorId).pipe(catchError(this.handleError));
  }
  handleError(_error:any)
  {
    return throwError(_error.message);
  }
  addVendor(vendor:Vendor):Observable<string>
  {
    return this.http.post<string>(this.baseurl+"addVendor",vendor).pipe(catchError(this.handleError));
  }
  updateVendor(vendorId:number,vendor:Vendor):Observable<string>
  {
    return this.http.put<string>(this.baseurl+"modifyVendor/"+vendorId,vendor);
  }
  deleteVendor(vendorId:number):Observable<string>
  {
    return this.http.delete<string>(this.baseurl+"removeVendor/"+vendorId);
  }

}
