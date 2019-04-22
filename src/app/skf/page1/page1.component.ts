import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColorTrackClass } from "src/app/classes/color-track-schema";
import { colorTrackService } from 'src/app/services/color-track.service';
import { RouterLink, Router } from '@angular/router';

import { Csinvent } from 'src/app/classes/csinvent';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  ngOnInit(){}
 num:number;
 num1 : Csinvent;
 
 orderData: ColorTrackClass
 order1Data: ColorTrackClass
 
  constructor(private _Activatedroute:ActivatedRoute,private colorTrack : colorTrackService ,
    private colorTrackSchema : ColorTrackClass,
    private router : Router) {
    
    
    this.num=this._Activatedroute.snapshot.params['var'];

      console.log(this.num)
    console.log('hi');


    // this.colorTrack.getviewss("Roller","B")
    // .subscribe(
    //   data1=>{
    //     this.num1=data1
    //     console.log(data1)

    //   }
    // )
    this.colorTrack.getview(this.num)
    .subscribe(
      data=>{
        this.orderData=data
        console.log(this.orderData)

      }
    )
   
    
   }

   colorCheck(val){
     if (val>0){
       return "green-color"
     }else return "yellow-color"
   }
  
   RedCheck(d){
    //  console.log(d)
    //  if(d==2 || d==5 || d==6){
        
    //  }
    return "red-color"
   }

   YellowCheck(val){
     return "yellow-color"
   }
   GreenCheck(val){
     return "green-color"
   }
  //  sample(l,m,n,p){
     

    
     
  //  }

setTd(a,b,c){
  if(a > (b/c) ){
    return "green-color"
  }else {
    return "yellow-color"
  }
}

  
  onsubmit(){
    this.router.navigate(['../skf/s1']);
    
  }

  
   

  }










