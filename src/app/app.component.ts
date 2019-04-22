import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  constructor(private router : Router){}
  title = 'new-ui-code';
  ngOnInit(){
      this.router.navigate(['/signin']);
    firebase.initializeApp({
      apiKey: "AIzaSyBexhuhh3utOFsA8Yvzqm2yFu1WA5kGzBM",
      authDomain: "skf-sih.firebaseapp.com"
    });
    
  }
}
