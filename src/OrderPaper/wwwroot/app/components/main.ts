import { Component, OnInit } from '@angular/core';
import { OrderPaper } from '../models/orderpaper';
import { OrderPaperService } from '../services/app.services';
import { OrderPaperSummary } from '../models/orderpapersummary';
import { BaseComponent } from './base.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app',
    template: `<h1>Order Paper</h1>
                    <a [routerLink]="['/test-dragula', 1]" class="pull-right">Test Dragula</a>
                    <a [routerLink]="['/test-accordion']" class="pull-right">Test Accordion</a>
                    <div id="spinner"></div>
                    <a href="#" (click)="toggle($event)">
                        {{isExpand ? 'Expand' : 'Collapse'}}
                    </a>
                    <ol type="1" id="{{SortableListId}}" class="list-sortable">
                        <li class="panel panel-info" *ngFor="let summary of orderPaperSummary">
                            <div class="panel-heading"></div>
                            <div class="panel-body">
                                <span>{{summary.Number}}</span>
                                <input class="pull-right" type="button" (click)="openPaper(summary.Number)" value="Edit" />
                            </div>
                        </li>
                    </ol>`,
    styles: [],
    providers: [OrderPaperService]
})
export class MainComponent extends BaseComponent implements OnInit {
    orderPaperSummary: Array<OrderPaperSummary> = new Array<OrderPaperSummary>();
    error: any;
    constructor(private orderPaperService: OrderPaperService, private router: Router) {
        super();
    }
    ngOnInit() {
        var listElm = document.getElementById("spinner");
        this.spinner.spin(listElm);
        this.SortableListId = 'draggableOrderPaperSummarylList';
        this.getOrderPaperSummary();
    }

    getOrderPaperSummary = () => {
        this.orderPaperService.getOrderPaperList().subscribe(
            (data: Array<OrderPaperSummary>) => {
                Object.assign(this.orderPaperSummary, data);
                this.spinner.stop();
            },
            (err: any) => this.error = err);
    }

    openPaper = (id: number) => {
        this.router.navigate(['/order-paper', id]);
    }

    updateSequence(oldIndex: number, newIndex: number): void {
        alert("main component -- old: " + oldIndex + " new: " + newIndex); 
    }
}