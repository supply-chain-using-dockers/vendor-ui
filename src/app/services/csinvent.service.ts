import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Csinvent } from '../classes/csinvent';


@Injectable()
export class CsinventService{

    constructor(private httpclient : HttpClient) {}

    getviewss(compname : string, comptype: string) : Observable <any>{
        return this.httpclient.get("https://fathomless-forest-98790.herokuapp.com/color-track");
    }
}