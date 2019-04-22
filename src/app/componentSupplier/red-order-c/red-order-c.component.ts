import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red-order-c',
  templateUrl: './red-order-c.component.html',
  styleUrls: ['./red-order-c.component.css']
})
export class RedOrderCComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  InData: Array<{
  
    oid:number,
    componenttname:string,
    quantity:number,
    date:string,
     }> =[
      {
        oid:123,
        componenttname:"Ball",
        quantity:100,
        date:"04/03/2019",
        
      },{
        oid:124,
        componenttname:"Roller",
        quantity:200,
        date:"10/03/2019",
        
      },{
        oid:125,
        componenttname:"Cage",
        quantity:300,
        date:"18/03/2019",
        
      },{
        oid:126,
        componenttname:"Inner Ring",
        quantity:400,
        date:"26/03/2019",
       
      }
  ]


}
