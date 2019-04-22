import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { rawOrder } from '../classes/raworder';

@Injectable()
export class rawService{

    constructor(private httpclient : HttpClient) {}
    post(data : rawOrder) : Observable<any> {
        return this.httpclient.post("https://cors-anywhere.herokuapp.com/https://fathomless-forest-98790.herokuapp.com/raworder",data);
    }
    }
    