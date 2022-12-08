import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../Vendor';
import { VendorServiceService } from '../vendor-service.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors:Vendor[];
  constructor(private service:VendorServiceService,private route:Router) { }

  ngOnInit(): void {
    
    this.getVendors();
   
  }
getVendors()
{
  this.service.getVendors().subscribe(data=>{this.vendors=data});

}
updateVendor(vendorId:number)
{
this.route.navigate(['update',vendorId]);
}
deleteVendor(vendorId:number)
{
  this.route.navigate(['delete',vendorId]);
  
}
viewVendor(vendorId:number)
{
  this.route.navigate(['details',vendorId]);
  
}

}
