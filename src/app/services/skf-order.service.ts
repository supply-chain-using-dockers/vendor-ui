import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SkfOrderClass } from '../classes/skf-order-schema';

@Injectable()
export class skfOrderService{

    constructor(private httpclient : HttpClient) {}


getSkfOrders() : Observable<any> {
   return this.httpclient.get("http://localhost:3000/place-order");
}

getSkfOrdersForCS(supplier : string) : Observable <any>{
    return this.httpclient.get("http://localhost:3000/place-order/"+ supplier );
}

getSkfordersview(Component : string) : Observable <any>{
    return this.httpclient.get("http://localhost:3000/demand/"+ Component );
}



postSkfOrder(data : SkfOrderClass) : Observable<any> {
    return this.httpclient.post("http://localhost:3000/place-order",data);
}




}