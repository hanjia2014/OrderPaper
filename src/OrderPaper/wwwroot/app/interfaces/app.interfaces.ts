import { Observable }     from 'rxjs/Observable';
import { OrderPaperSummary } from '../models/orderpapersummary';
import { Response } from '@angular/http';

export interface IOrderPaperService {
    getOrderPaperList: () => Observable<OrderPaperSummary[]>;
}

export interface ITogglable {
    toggle: (eleId: string) => void;
}