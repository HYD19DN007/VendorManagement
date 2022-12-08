import { Component, OnInit } from '@angular/core';
import { Person } from '../Person';

@Component({
  selector: 'app-filter-demo',
  templateUrl: './filter-demo.component.html',
  styleUrls: ['./filter-demo.component.css']
})
export class FilterDemoComponent implements OnInit {

  constructor() { }
  searchText='';
  getAge='';
  person:Person[]=[
    {name:'James',age:21,email:'James@techwave.net'},
    {name:'Xavier',age:22,email:'Xavier@techwave.net'},
    {name:'John',age:25,email:'John@techwave.net'},
    {name:'Allaman',age:22,email:'Allaman@techwave.net'},
    {name:'Adams',age:26,email:'Adams@techwave.net'}
  ];

  ngOnInit(): void {
  }

}
