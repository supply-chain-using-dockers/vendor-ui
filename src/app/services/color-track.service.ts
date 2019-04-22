import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ColorTrackClass } from '../classes/color-track-schema';

@Injectable()
export class colorTrackService{

    constructor(private httpclient : HttpClient) {}

    getallorders() : Observable<any> {
        return this.httpclient.get("https://cors-anywhere.herokuapp.com/https://fathomless-forest-98790.herokuapp.com/place-order");
     }


     getview(compno : number) : Observable <any>{
        return this.httpclient.get("https://cors-anywhere.herokuapp.com/https://fathomless-forest-98790.herokuapp.com/color-track/"+ compno );
    }



    getviewss(compname : string, comptype: string) : Observable <any>{
        return this.httpclient.get("https://cors-anywhere.herokuapp.com/https://fathomless-forest-98790.herokuapp.com/color-track/"+ compname+"/"+comptype );
    }
}