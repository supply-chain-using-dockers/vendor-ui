import { Component, OnInit } from '@angular/core';
import { skfOrderService } from 'src/app/services/skf-order.service';
import { SkfOrderClass } from 'src/app/classes/skf-order-schema';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  orderData : SkfOrderClass  
  constructor(private skfOrder : skfOrderService ,
    private skfSchema : SkfOrderClass,
    private router : Router ) {
     
     }

  ngOnInit() {
  }


  onsubmit(Component :number){
    // RouterLink : "/skf/vieworders/:"+Component;
    this.router.navigate(['../skf/vieworders',Component]);
    // this.skfOrder.getSkforders(Component)
    // .subscribe(
    //   data=>{
    //     this.orderData=data
    //     console.log("hello")
    //     console.log(this.orderData)
    //   }
    // )

  }

  InData: Array<{
  
    srno : number,
    Component:string,
    
    
     }> =[
      {
        srno:1,
        Component : "Inner Ring",
        
        
      },{
        srno:2,
        Component : "Outer Ring",
       
      },{
        srno:3,
        Component : "Roller",
       
      },{
        srno:4,
        Component : "Ball",
       
      },{
        srno:5,
        Component : "Lubricant",
       
      },{
        srno:6,
        Component : "Cage",
        
      }
  ]
}


