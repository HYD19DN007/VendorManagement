import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../Vendor';
import { VendorServiceService } from '../vendor-service.service';

@Component({
  selector: 'app-update-vendor',
  templateUrl: './update-vendor.component.html',
  styleUrls: ['./update-vendor.component.css']
})
export class UpdateVendorComponent implements OnInit {
  vId:number;
  vendor:Vendor=new Vendor();
  message:string;
  constructor(private service:VendorServiceService,private aroute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    //fetching the Id from url
    //http://localhost:4200/update/13  
    // It will fetch 13
    this.vId=this.aroute.snapshot.params['vendorId'];
    this.service.getVendorById(this.vId).subscribe(data=>{this.vendor=data});
  }
  onSubmit()
  {
    this.service.updateVendor(this.vId,this.vendor).subscribe(data=>{console.log(data);});
    this.route.navigate(['/VendorList']);
  }
  


}
