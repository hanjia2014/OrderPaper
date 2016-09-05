﻿import { Component, OnInit, ViewChild, ViewChildren, QueryList, NgZone } from '@angular/core';
import { OrderPaper } from '../models/orderpaper';
import { OrderPaperService } from '../services/app.services';
import { BaseComponent } from './base.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Response }     from '@angular/http';
import { MotionSection, Section }     from '../models/section';
import { OrderType }     from '../models/ordertype';

@Component({
    selector: 'new-order-paper',
    template: `<h1>{{id}}</h1>
                <div id="spinner"></div>
                <tabs>
                    <tab [title]="'Details'">
                        <select2 [id]="'orderPaperStatus'" [placeholder]="'status'" [enableSearch]="false" [multiple]="false" [data]="orderPaperStatus" (selected)="selected($event)"></select2>
                        <date-picker [id]="'test'" [IncludeTime]="true" (onValueChange)="dateChange($event)"></date-picker><br/>
                        <input [(ngModel)] = "orderPaper.OrderPaperNumber" placeholder="Order Paper Number" /><br/>
                        <input [(ngModel)] = "orderPaper.SittingHours" placeholder="Sitting Hours" /><br/>
                        <button type="button" class="btn btn-default" (click)="modal.open()">Add</button>
                        <br/>
                        <ol type="1" id="{{SortableListId}}" class="list-sortable">
                            <li class="panel panel-info" *ngFor="let orderType of orderPaper.OrderTypes; let i = index">
                                <div class="panel-heading"></div>
                                <div class="panel-body">
                                    <order-type [orderType] = "orderType"></order-type>
                                </div>
                            </li>
                        </ol>

                        <a class="btn btn-lg save-button" (click)="save($event)">
                            <span class="glyphicon glyphicon-floppy-disk"></span> Save
                        </a>

                    </tab>
                    <tab [title]="'Preview'">
                    </tab>
                </tabs>
                `,
    styles: [],
    providers: [OrderPaperService]
})
export class NewOrderPaperComponent extends BaseComponent implements OnInit {
    orderPaper: OrderPaper;
    error: any;
    sub: any;
    id: number;
    //select2
    selectedItem: any;
    selectId: string;
    orderPaperStatus = [{ id: "Provisional", text: "Provisional" }, { id: "Final", text: "Final" }];
    //spin element
    spinnerElm: any = document.getElementById("spinner");
    //datepicker
    orderPaperDate: Date;

    constructor(private orderPaperService: OrderPaperService, private route: ActivatedRoute, private zone: NgZone) {
        super();
    }

    ngOnInit() {
        this.SortableListId = 'draggableOrderPaperTypeList';
        if (!this.orderPaper) {
            this.initialiseOrderPaper();
        }
    }
    public selected(value: any): void {
        this.selectedItem = value;
    }

    //initialise
    initialiseOrderPaper() {
        this.orderPaper = new OrderPaper();
    }
    //save
    save = (e: any) => {
        var paperString = JSON.stringify(this.orderPaper);
        e.preventDefault();
        this.orderPaperService.save(this.orderPaper).subscribe(
            (data: Response) => {

            },
            (err: any) => this.error = err);
    }

    dateChange = (value: Date) => {
        this.orderPaperDate = value;
    }

    updateSequence(oldIndex: number, newIndex: number): void {
        var oldSequence = oldIndex + 1;
        var newSequence = newIndex + 1;
    }
}