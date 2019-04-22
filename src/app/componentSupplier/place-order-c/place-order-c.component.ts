import { Component, OnInit,ViewChild } from '@angular/core';
import {rawOrder} from '../../classes/raworder';
import { rawService } from '../../services/rawdata.service';
import { NgForm, NgModel } from '@angular/forms';
@Component({
  selector: 'place-order-c',
  templateUrl: './place-order-c.component.html',
  styleUrls: ['./place-order-c.component.css']
})
export class PlaceOrderCComponent implements OnInit {
  @ViewChild('f') placeorderform :NgForm

  constructor(private _freeApiService: rawService) { }

  

   user ={
    componentType: '',
    qunatity: 0,
    price: 0,
    total: 0,
    expectedDate: '',
   }
   submitted = false;
   lstcomments:rawOrder[];
   lstPosts:rawOrder[];
  objPosts:rawOrder[];
  ngOnInit() {
  }

  onSubmit(form : NgForm){
    // console.log(this.placeorderform);
    // return false;
    this.submitted=true;
    this.user.componentType = this.placeorderform.value.componentType;
    this.user.qunatity = this.placeorderform.value.qunatity;
    this.user.price = this.placeorderform.value.price;
    this.user.total = this.placeorderform.value.total;
    this.user.expectedDate = this.placeorderform.value.expectedDate;




var opost=new rawOrder()
    
       
     opost.componentType = this.user.componentType;
    opost.qunatity = this.user.qunatity;
    opost.price = this.user.price;
    opost.total = this.user.total;
    opost.expectedDate = this.user.expectedDate;
  
    this._freeApiService.post(opost)
    .subscribe
      (
        data=>
        {
            this .objPosts=data;
        }
        
        )


console.log(opost);
    this.placeorderform.reset();
    //PLEASE WRITE POST FUNCTION HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

      }
    
        


    
  

 
 
 
 
 
 
 
 
 
 
 
  

}











