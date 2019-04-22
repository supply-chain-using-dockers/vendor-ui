import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rmview',
  templateUrl: './rmview.component.html',
  styleUrls: ['./rmview.component.css']
})
export class RmviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  




  InData: Array<{
  
    OID : string,
    total : string,
    date: string,
    
     }> =[
      {
        OID : "1",
       
        total :"3",
        date: "10/01/2019",
        
      },{
        OID : "2",
       
        total :"8",
        date: "10/03/2019",

      },{
        OID : "3",
       
        total :"9",
        date: "20/03/2019",
        
      },{
        OID : "4",
       
        total :"33",
        date: "20/05/2019",
       
      }
  ]

}


