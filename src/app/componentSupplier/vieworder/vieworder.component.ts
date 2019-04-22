import { Component, OnInit, Injectable } from '@angular/core';
import { OrderHistoryComponent } from '../../skf/order-history/order-history.component';
import { skfOrderService } from 'src/app/services/skf-order.service';
import { SkfOrderClass } from 'src/app/classes/skf-order-schema';
import { RouterLink, Router } from '@angular/router';




@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})

export class ViewOrderComponent implements OnInit {

  orderData : SkfOrderClass  


  constructor(private skfOrder : skfOrderService ,
    private skfSchema : SkfOrderClass,
    private router : Router ) { 
      this.skfOrder.getSkfOrdersForCS("pramod")
      .subscribe(
        data=>{
          this.orderData=data
          console.log("hello")
          console.log(this.orderData)
        }
      )
    }

  ngOnInit() {
  }

  

  

  onsubmit(){
    this.router.navigate(['../componentSupplier/order-table']);
    
  }
}
