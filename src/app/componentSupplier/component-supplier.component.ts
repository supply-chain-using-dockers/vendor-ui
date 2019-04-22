import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-supplier',
  templateUrl: './component-supplier.component.html',
  styleUrls: ['./component-supplier.component.css']
})
export class ComponentSupplierComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navbarData: Array<{
    title: string,
    icon : string ,
    link:string}> =[
      {
        title: "Dashboard",
        icon: "menu-icon fa fa-laptop",
        link: "/componentSupplier/dashboard-c"
      },{
        title:"Place Order",
        icon : "menu-icon fa fa-tasks",
        link: "/componentSupplier/place-order-c"
      },
     
      
      {
        title:"View Order",
        icon:"menu-icon fa fa-list-alt",
        link:"/componentSupplier/vieworder"
      }
  ]
}
