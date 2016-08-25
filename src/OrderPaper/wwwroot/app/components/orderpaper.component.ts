import { Component, OnInit } from '@angular/core';
import { OrderPaper } from '../models/orderpaper';
import { OrderPaperService } from '../services/app.services';
import { BaseComponent } from './base.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'order-paper',
    template: `<h1>Test {{id}}</h1>`,
    styles: [],
    directives: [],
    providers: [OrderPaperService]
})
export class OrderPaperComponent extends BaseComponent implements OnInit {
    orderPaper: OrderPaper;
    error: any;
    sub: any;
    id: number;

    constructor(private orderPaperService: OrderPaperService, private route: ActivatedRoute) {
        super();
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
    }
}