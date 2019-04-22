import { Component, OnInit ,ViewChild } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { NgForm ,NgModel } from '@angular/forms';

@Component({
  selector: 'app-availablity-check',
  templateUrl: './availablity-check.component.html',
  styleUrls: ['./availablity-check.component.css']
})

export class AvailablityCheckComponent implements OnInit {

  


  @ViewChild('f') placeorder : NgForm
  constructor(private router : Router      
    ) { }

  ngOnInit() {

  }
  var : number;

  onSubmit(form : NgForm){

    //console.log(this.placeorder.value.component)
    this.var=this.placeorder.value.component
    this.router.navigate(['../skf/page1',this.var]);

  }

}
