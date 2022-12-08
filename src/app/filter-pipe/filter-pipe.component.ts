import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-pipe',
  templateUrl: './filter-pipe.component.html',
  styleUrls: ['./filter-pipe.component.css']
})
export class FilterPipeComponent implements OnInit {

  users=[{name:"Ahn",joineddate:new Date(2022,2,22),age:22.34},
  {name:"Emerson",joineddate:new Date(2001,2,1),age:21.7},
  {name:"Thu",joineddate:new Date(2021,7,1),age:20.7}
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
