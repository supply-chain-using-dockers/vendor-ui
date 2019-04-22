import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skf',
  templateUrl: './skf.component.html',
  styleUrls: ['./skf.component.css']
})
export class SkfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navbarData: Array<{
    title: string,
    icon : string,
    link:string }> =[
      {
        title:"Demand Estimation",
        icon : "menu-icon fa fa-bar-chart",
        link: "/skf/demand-estimation"
      },{
        title:"Place Order",
        icon : "menu-icon fa fa-tasks",
        link: "/skf/place-order"
      },/*{
        title:"Trace Order",
        icon : "menu-icon fa fa-table",
        link: "/skf/availablity-check"
      }*/{
        title:"Order History",
        icon : "menu-icon fa fa-list-alt",
        link: "/skf/order-history"
      },{
        title:"Inventory",
        icon : "menu-icon fa fa-list-alt",
        link: "/skf/inventoryskf"
      }
  ]
}
