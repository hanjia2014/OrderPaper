import { Component, OnInit } from '@angular/core';
import { OrderPaper } from '../models/orderpaper';
import { OrderPaperService } from '../services/app.services';
import { BaseComponent } from './base.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Select2Component } from '../directives/select2';

@Component({
    selector: 'order-paper',
    template: `<h1>{{id}}</h1><select2 [id]="selectId" [multiple]="false" [data]="items2" (selected)="selected($event)"></select2>`,
    styles: [],
    directives: [Select2Component],
    providers: [OrderPaperService]
})
export class OrderPaperComponent extends BaseComponent implements OnInit {
    orderPaper: OrderPaper;
    error: any;
    sub: any;
    id: number;
    selectedItem: any;
    selectId: string;
    items2 = [{ id: "Hearing Of Evidence", text: "Hearing Of Evidence" }, { id: "Consideration", text: "Consideration" }, { id: "Free Text", text: "Free Text" }];

    constructor(private orderPaperService: OrderPaperService, private route: ActivatedRoute) {
        super();
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.selectId = 'mySel' + this.id;
        });
    }
    public selected(value: any): void {
        this.selectedItem = value;
    }
}