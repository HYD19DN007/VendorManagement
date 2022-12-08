import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Vendor } from '../Vendor';
import { VendorServiceService } from '../vendor-service.service';

@Component({
  selector: 'app-create-vendor',
  templateUrl: './create-vendor.component.html',
  styleUrls: ['./create-vendor.component.css']
})
export class CreateVendorComponent implements OnInit {
  errorMessage:string="";
  vendor:Vendor=new Vendor();
  private message:string;
  public isDirty=true;
  constructor(private service:VendorServiceService,private route:Router) { }

  ngOnInit(): void {

  }
  onSubmit()
  {
    alert(this.vendor.name);
    this.service.addVendor(this.vendor).subscribe(data=>{this.message=data;});
   alert(this.message);
    this.route.navigate(['/VendorList']).then(()=>{window.location.reload();});
 
  }

}
