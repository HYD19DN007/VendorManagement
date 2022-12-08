import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private route:Router,private aroute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  View()
  {
    
    this.route.navigate(['view'],{relativeTo:this.aroute});
  }
  Edit()
  {
    this.route.navigate(['edit'],{relativeTo:this.aroute});
  

  }
}
