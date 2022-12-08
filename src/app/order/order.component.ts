import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private route:Router,private aroute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  Op()
  {
    this.route.navigate(['productorder'],{relativeTo:this.aroute});
  
  }
}
