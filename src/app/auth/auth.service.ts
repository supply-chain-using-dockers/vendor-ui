import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthService{

    constructor(private router : Router) {}
    signupUser(email: string, password: string){
     firebase.auth().createUserWithEmailAndPassword(email,password)
     .catch(
         error =>console.log(error)
     )
    }


    signinUser(email: string, password: string, temp: string) {

        firebase.auth().signInWithEmailAndPassword(email, password)
          .then(
              
            response => {
                console.log(response);
                if(temp=="skf")
                  {
                    this.router.navigate(['/skf/place-order']);
                  } 
                else if(temp=="componentsupplier")
                {
                  this.router.navigate(['/componentSupplier/dashboard-c']);
                }
                else if(temp=="rawmaterial")
                {
                  this.router.navigate(['/rawmaterial-supplier/dashboard-r']);
                }
                else 
                {
                  this.router.navigate(['/signin']);
                }
                //console.log("My response" + response);
            }
          )
          .catch(
            error => console.log(error)
          );
      }
 
      
}