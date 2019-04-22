import { Component, OnInit, Injectable } from '@angular/core';
import { SkfOrderClass } from 'src/app/classes/skf-order-schema';
import { skfOrderService } from 'src/app/services/skf-order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})


export class OrderHistoryComponent implements OnInit {

  orderData : SkfOrderClass  
 

  constructor(private skfOrder : skfOrderService ,
              private skfSchema : SkfOrderClass ) { 
            
    console.log('hi');
    this.skfOrder.getSkfOrders()
    .subscribe(
      data=>{
        this.orderData=data
        console.log(this.orderData)

      }
    )
   
    

  }

  ngOnInit() {
  }
  

  // orderData: Array<{
  //   supplier: string,
  //   component : string,
  //   componentType : string,
  //   orderDate :  string,
  //   deliveryDate : string,
  //   deliveryType : string,
  //   batches : number,
  //   quantity : number,
  //   amount : number
  //   }> =[
  //     {
  //       supplier : 'Palak',
  //       component : 'ball-bearing',
  //       componentType : '2' ,
  //       orderDate : '5-12-2010' ,
  //       deliveryDate : '7-12-2010',
  //       deliveryType : 'B',
  //       batches : 50,
  //       quantity : 500,
  //       amount : 60000
  //     }, {
  //       supplier : 'Palak',
  //       component : 'ball-bearing',
  //       componentType : '2' ,
  //       orderDate : '5-12-2010' ,
  //       deliveryDate : '7-12-2010',
  //       deliveryType : 'B',
  //       batches : 50,
  //       quantity : 500,
  //       amount : 60000
  //     },{
  //       supplier : 'Palak',
  //       component : 'ball-bearing',
  //       componentType : '2' ,
  //       orderDate : '5-12-2010' ,
  //       deliveryDate : '7-12-2010',
  //       deliveryType : 'B',
  //       batches : 50,
  //       quantity : 500,
  //       amount : 60000
  //     }
  // ]

}
