import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rawmaterial-supplier',
  templateUrl: './rawmaterial-supplier.component.html',
  styleUrls: ['./rawmaterial-supplier.component.css']
})
export class RawmaterialSupplierComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navbarData: Array<{
    title: string,
    icon : string,
  link:String }> =[
      {
        title: "Dashboard",
        icon: "menu-icon fa fa-laptop",
        link: "/rawmaterial-supplier/dashboard-r"
        
      },{
        title:"View Order",
        icon : "menu-icon fa fa-tasks",
        link:"/rawmaterial-supplier/rmview"
      }
  ]
}










