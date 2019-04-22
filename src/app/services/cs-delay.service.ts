import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { orderdelay  } from '../classes/delay';
@Injectable()
export class CsOrderService{

    constructor(private httpclient : HttpClient) {}


getCsDelay() : Observable<any> {
   return this.httpclient.get("https://cors-anywhere.herokuapp.com/https://fathomless-forest-98790.herokuapp.com/delay");
}
}