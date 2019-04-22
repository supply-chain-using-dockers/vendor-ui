import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor( private router : Router) { }

  ngOnInit() {
  }

  onsubmit(){
    this.router.navigate(['../skf/dashboard']);
    
  }

}
