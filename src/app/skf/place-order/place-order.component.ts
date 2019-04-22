import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm ,NgModel } from '@angular/forms';
import { SkfOrderClass } from 'src/app/classes/skf-order-schema';
import { skfOrderService } from '../../services/skf-order.service'

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  @ViewChild('f') placeorder : NgForm
  constructor(private SkfOrderService : skfOrderService,      
    ) { }

  ngOnInit() {
  }

  user= {
    amount: 0,
    batches: 0,
    component: 0,
    componentType: "",
    expectedDate: "",
    price: 0,
    quantity: 0,
    supplier: ""

  }

  // TotalPrice = this.placeorder.value.quantity * this.placeorder.value.price;

  onSubmit(form : NgForm){
    console.log(this.placeorder)
    this.user.amount = this.placeorder.value.quantity * this.placeorder.value.price
    this.user.batches = this.placeorder.value.batches
    this.user.component= this.placeorder.value.component
    this.user.componentType= this.placeorder.value.componentType
    this.user.expectedDate = this.placeorder.value.expectedDate
    this.user.quantity = this.placeorder.value.quantity
    this.user.supplier = this.placeorder.value.supplier
    this.user.price = this.placeorder.value.price
    console.log(`User  =  ${this.user.amount}`)


    //POST TO API
    var d=new SkfOrderClass()

    d.amount=this.placeorder.value.price * this.placeorder.value.quantity
    d.batches =this.placeorder.value.batches
    d.component=this.placeorder.value.component
    d.componentType=this.placeorder.value.componentType
    d.expectedDate=this.placeorder.value.expectedDate
    d.quantity=this.placeorder.value.quantity
    d.supplier=this.placeorder.value.supplier
    d.price=this.placeorder.value.price
    d.deliveryMode=this.placeorder.value.deliveryMode

    console.log(d.amount)

    this.SkfOrderService.postSkfOrder(d)
    .subscribe(
      data=>{
        console.log("successful")
      }
    )
    
  }


}
