import { Component, OnInit } from '@angular/core';
import { skfOrderService } from 'src/app/services/skf-order.service';
import { SkfOrderClass } from 'src/app/classes/skf-order-schema';
import { ActivatedRoute } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrls: ['./vieworders.component.css']
})
export class ViewordersComponent implements OnInit {
  value:string;
  orderData : SkfOrderClass 
  constructor(private skfOrder : skfOrderService ,
    private skfSchema : SkfOrderClass ,private _Activatedroute:ActivatedRoute) { 
      this.value=this._Activatedroute.snapshot.params['Component'];
      console.log(this.value)
      
      this.skfOrder.getSkfordersview(this.value)
      .subscribe(
        data=>{
          this.orderData=data
          console.log(data)
          // console.log(this.orderData)
        }
      )
    }

  ngOnInit() {
  }

}
