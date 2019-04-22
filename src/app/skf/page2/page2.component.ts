import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  InData: Array<{
  
    compname : string,
    comptype : string;
    quantity : number,
    suppyname:string,
    rt:number,
    frequency:number,

     }> =[
      
      {
        compname : "Roller",
        comptype : "A",
        quantity : 180000,
        suppyname:"s1",
        rt:25,
        frequency:10,
      },{
        compname : "Roller",
        comptype : "B",
        quantity : 190000,
        suppyname:"s1",
        rt:25,
        frequency:12,
      },
      {
        compname : "Roller",
        comptype : "A",
        quantity : 180000,
        suppyname:"s2",
        rt:25,
        frequency:10,
      },{
        compname : "Roller",
        comptype : "B",
        quantity : 190000,
        suppyname:"s2",
        rt:25,
        frequency:12,
      },
      {
        compname : "Roller",
        comptype : "A",
        quantity : 180000,
        suppyname:"s3",
        rt:25,
        frequency:10,
      },{
        compname : "Roller",
        comptype : "B",
        quantity : 190000,
        suppyname:"s3",
        rt:25,
        frequency:12,
      },
      {
        compname : "Roller",
        comptype : "A",
        quantity : 180000,
        suppyname:"s4",
        rt:25,
        frequency:10,
      },{
        compname : "Roller",
        comptype : "B",
        quantity : 190000,
        suppyname:"s4",
        rt:25,
        frequency:12,
      },
     {
        compname : "Lubricant",
        comptype : "A",
        quantity : 50000,
        suppyname:"s4",
        rt:24,
        frequency:12,
      },{
        compname : "Lubricant",
        comptype : "B",
        quantity : 15000,
        suppyname:"s1",
        rt:24,
        frequency:12,
      },
      {
        compname : "Lubricant",
        comptype : "A",
        quantity : 50000,
        suppyname:"s2",
        rt:22,
        frequency:10,
      },{
        compname : "Lubricant",
        comptype : "B",
        quantity : 15000,
        suppyname:"s2",
        rt:22,
        frequency:10,
      },
      
      {
        compname : "Lubricant",
        comptype : "A",
        quantity : 50000,
        suppyname:"s3",
        rt:24,
        frequency:12,
      },{
        compname : "Lubricant",
        comptype : "B",
        quantity : 15000,
        suppyname:"s3",
        rt:24,
        frequency:12,
      },
      {
        compname : "Lubricant",
        comptype : "A",
        quantity : 50000,
        suppyname:"s4",
        rt:22,
        frequency:10,
      },{
        compname : "Lubricant",
        comptype : "B",
        quantity : 15000,
        suppyname:"s4",
        rt:22,
        frequency:10,
      },
      
      
      
      
      {
        compname : "Ball",
        comptype : "A",
        quantity : 50000,
        suppyname:"s1",
        rt:21,
        frequency:18,
      },{
        compname : "Ball",
        comptype : "B",
        quantity : 15000,
        suppyname:"s1",
        rt:21,
        frequency:18,
      },
      {
        compname : "Ball",
        comptype : "A",
        quantity : 50000,
        suppyname:"s2",
        rt:21,
        frequency:18,
      },{
        compname : "Ball",
        comptype : "B",
        quantity : 15000,
        suppyname:"s2",
        rt:21,
        frequency:18,
      },{
        compname : "Ball",
        comptype : "A",
        quantity : 50000,
        suppyname:"s3",
        rt:21,
        frequency:18,
      },{
        compname : "Ball",
        comptype : "B",
        quantity : 15000,
        suppyname:"s3",
        rt:21,
        frequency:18,
      },
      {
        compname : "Ball",
        comptype : "A",
        quantity : 50000,
        suppyname:"s4",
        rt:21,
        frequency:18,
      },{
        compname : "Ball",
        comptype : "B",
        quantity : 15000,
        suppyname:"s4",
        rt:21,
        frequency:18,
      },
      
      
      {
        compname : "Cage",
        comptype : "A",
        quantity : 17000,
        suppyname:"s1",
        rt:22,
        frequency:19,
      },{
        compname : "Cage",
        comptype : "B",
        quantity : 23000,
        suppyname:"s1",
        rt:22,
        frequency:19,
      },{
        compname : "Cage",
        comptype : "A",
        quantity : 17000,
        suppyname:"s2",
        rt:22,
        frequency:19,
      },{
        compname : "Cage",
        comptype : "B",
        quantity : 23000,
        suppyname:"s2",
        rt:22,
        frequency:19,
      },
      {
        compname : "Cage",
        comptype : "A",
        quantity : 17000,
        suppyname:"s3",
        rt:22,
        frequency:19,
      },{
        compname : "Cage",
        comptype : "B",
        quantity : 23000,
        suppyname:"s3",
        rt:22,
        frequency:19,
      },{
        compname : "Cage",
        comptype : "A",
        quantity : 17000,
        suppyname:"s4",
        rt:22,
        frequency:19,
      },{
        compname : "Cage",
        comptype : "B",
        quantity : 23000,
        suppyname:"s4",
        rt:22,
        frequency:19,
      }
  ]
}
 

