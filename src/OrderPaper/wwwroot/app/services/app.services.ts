import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { OrderPaper } from '../models/orderpaper';
import { IOrderPaperService } from '../interfaces/app.interfaces';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { OrderPaperSummary } from '../models/orderpapersummary';

@Injectable()
export class OrderPaperService implements IOrderPaperService {
    apiUrl: string = '/api/orderpapersummary';

    constructor(private http: Http) {
        
    }

    getOrderPaperList = (): Observable<Array<OrderPaperSummary>> => {
        return this.http.get(this.apiUrl).map((res: Response) => {
            if (res.status != 200) {
                throw new Error('No objects to retrieve! code status ' + res.status);
            } else {
                return res.json();
            }
        });
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    }
}