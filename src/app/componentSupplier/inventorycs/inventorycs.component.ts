import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventorycs',
  templateUrl: './inventorycs.component.html',
  styleUrls: ['./inventorycs.component.css']
})
export class InventorycsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  InData: Array<{
  
    compname : string,
    
    existinginventory:number,
     }> =[
      {
        compname : "Inner Ring",
       
        existinginventory:10000,
        
      },{
        compname : "Outer Ring",
       
        existinginventory:10000,
        
      },{
        compname : "Roller",
        
        existinginventory:6000,
        
      },{
        compname : "Ball",
        
        existinginventory:20000,
       
      },{
        compname : "Lubricant",
        
        existinginventory:5000,
        
      },{
        compname : "Cage",
       
        existinginventory:9000,
        
      }
  ]

}
