import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Vendor } from '../Vendor';
import { VendorListComponent } from '../vendor-list/vendor-list.component';
import { VendorServiceService } from '../vendor-service.service';

@Component({
  selector: 'app-delete-vendor',
  templateUrl: './delete-vendor.component.html',
  styleUrls: ['./delete-vendor.component.css']
})
export class DeleteVendorComponent implements OnInit {

  private vid:number;
  public vendor:Vendor;
  public message:string;
  constructor(private service:VendorServiceService,private aroute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
  this.vid=this.aroute.snapshot.params["vendorId"]
  this.service.getVendorById(this.vid).subscribe(data=>{this.vendor=data});
  }
  onSubmit(){
    
    var status=confirm("Do you want delete the vendor with id "+this.vid);
    if(status)
    {
      this.service.deleteVendor(this.vid).subscribe(data=>{this.message=data;});
    }
    this.route.navigate(['/VendorList']).then(()=>{window.location.reload();});
  }
}
