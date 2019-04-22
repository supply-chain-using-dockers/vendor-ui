import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventoryskf',
  templateUrl: './inventoryskf.component.html',
  styleUrls: ['./inventoryskf.component.css']
})

export class InventoryskfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  InData: Array<{
  
    compno   :number;
    compname : string,
    comptype : string;
    quantity : number,
    suppyname:string,
    rt:number,
    frequency:number,

     }> =[
      
      {
        compno: 1,
        compname : "Roller",
        comptype : "A",
        quantity : 180000,
        suppyname:"s1",
        rt:25,
        frequency:10,
      },{
        compno: 1,
        compname : "Roller",
        comptype : "B",
        quantity : 190000,
        suppyname:"s1",
        rt:25,
        frequency:12,
      },
      {
        compno: 1,
        compname : "Roller",
        comptype : "A",
        quantity : 180000,
        suppyname:"s2",
        rt:25,
        frequency:10,
      },{
        compno: 1,
        compname : "Roller",
        comptype : "B",
        quantity : 190000,
        suppyname:"s2",
        rt:25,
        frequency:12,
      },
      {
        compno: 1,
        compname : "Roller",
        comptype : "A",
        quantity : 180000,
        suppyname:"s3",
        rt:25,
        frequency:10,
      },{
        compno: 1,
        compname : "Roller",
        comptype : "B",
        quantity : 190000,
        suppyname:"s3",
        rt:25,
        frequency:12,
      },
      {
        compno: 1,
        compname : "Roller",
        comptype : "A",
        quantity : 180000,
        suppyname:"s4",
        rt:25,
        frequency:10,
      },{
        compno: 1,
        compname : "Roller",
        comptype : "B",
        quantity : 190000,
        suppyname:"s4",
        rt:25,
        frequency:12,
      },
      
      
      
      {
        compno: 2,
        compname : "Lubricant",
        comptype : "A",
        quantity : 50000,
        suppyname:"s4",
        rt:24,
        frequency:12,
      },{
        compno: 2,
        compname : "Lubricant",
        comptype : "B",
        quantity : 15000,
        suppyname:"s1",
        rt:24,
        frequency:12,
      },
      {
        compno: 2,
        compname : "Lubricant",
        comptype : "A",
        quantity : 50000,
        suppyname:"s2",
        rt:22,
        frequency:10,
      },{
        compno: 2,
        compname : "Lubricant",
        comptype : "B",
        quantity : 15000,
        suppyname:"s2",
        rt:22,
        frequency:10,
      },
      
      {
        compno: 2,
        compname : "Lubricant",
        comptype : "A",
        quantity : 50000,
        suppyname:"s3",
        rt:24,
        frequency:12,
      },{
        compno: 2,
        compname : "Lubricant",
        comptype : "B",
        quantity : 15000,
        suppyname:"s3",
        rt:24,
        frequency:12,
      },
      {
        compno: 2,
        compname : "Lubricant",
        comptype : "A",
        quantity : 50000,
        suppyname:"s4",
        rt:22,
        frequency:10,
      },{
        compno: 2,
        compname : "Lubricant",
        comptype : "B",
        quantity : 15000,
        suppyname:"s4",
        rt:22,
        frequency:10,
      },
      
      
      
      
      {
        compno: 3,
        compname : "Ball",
        comptype : "A",
        quantity : 50000,
        suppyname:"s1",
        rt:21,
        frequency:18,
      },{
        compno: 3,
        compname : "Ball",
        comptype : "B",
        quantity : 15000,
        suppyname:"s1",
        rt:21,
        frequency:18,
      },
      {
        compno: 3,
        compname : "Ball",
        comptype : "A",
        quantity : 50000,
        suppyname:"s2",
        rt:21,
        frequency:18,
      },{
        compno: 3,
        compname : "Ball",
        comptype : "B",
        quantity : 15000,
        suppyname:"s2",
        rt:21,
        frequency:18,
      },{
        compno: 3,
        compname : "Ball",
        comptype : "A",
        quantity : 50000,
        suppyname:"s3",
        rt:21,
        frequency:18,
      },{
        compno: 3,
        compname : "Ball",
        comptype : "B",
        quantity : 15000,
        suppyname:"s3",
        rt:21,
        frequency:18,
      },
      {
        compno: 3,
        compname : "Ball",
        comptype : "A",
        quantity : 50000,
        suppyname:"s4",
        rt:21,
        frequency:18,
      },{
        compno: 3,
        compname : "Ball",
        comptype : "B",
        quantity : 15000,
        suppyname:"s4",
        rt:21,
        frequency:18,
      },
      
      
      {
        compno: 4,
        compname : "Cage",
        comptype : "A",
        quantity : 17000,
        suppyname:"s1",
        rt:22,
        frequency:19,
      },{
        compno: 4,
        compname : "Cage",
        comptype : "B",
        quantity : 23000,
        suppyname:"s1",
        rt:22,
        frequency:19,
      },{
        compno: 4,
        compname : "Cage",
        comptype : "A",
        quantity : 17000,
        suppyname:"s2",
        rt:22,
        frequency:19,
      },{
        compno: 4,
        compname : "Cage",
        comptype : "B",
        quantity : 23000,
        suppyname:"s2",
        rt:22,
        frequency:19,
      },
      {
        compno: 4,
        compname : "Cage",
        comptype : "A",
        quantity : 17000,
        suppyname:"s3",
        rt:22,
        frequency:19,
      },{
        compno: 4,
        compname : "Cage",
        comptype : "B",
        quantity : 23000,
        suppyname:"s3",
        rt:22,
        frequency:19,
      },{
        compno: 4,
        compname : "Cage",
        comptype : "A",
        quantity : 17000,
        suppyname:"s4",
        rt:22,
        frequency:19,
      },{
        compno: 4,
        compname : "Cage",
        comptype : "B",
        quantity : 23000,
        suppyname:"s4",
        rt:22,
        frequency:19,
      }
  ]
}
