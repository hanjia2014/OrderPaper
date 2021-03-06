﻿import { Observable }     from 'rxjs/Observable';
import { OrderPaperSummary } from '../models/orderpapersummary';
import { OrderPaper } from '../models/orderpaper';
import { Response } from '@angular/http';

export interface IOrderPaperService {
    getOrderPaperList: () => Observable<OrderPaperSummary[]>;
    getOrderPaper: (id: number) => Observable<OrderPaper>;
    save: (orderPaper: OrderPaper) => Observable<Response>;
}

export interface ITogglable {
    toggle: (eleId: string) => void;
}