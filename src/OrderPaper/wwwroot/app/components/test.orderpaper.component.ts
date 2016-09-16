import { Component, OnInit, ViewChild, ViewChildren, QueryList, NgZone }    from '@angular/core';
import { ActivatedRoute, Router }                                           from '@angular/router';
import { Response }                                                         from '@angular/http';
import { BaseComponent }                                                    from './base.component';
import { OrderPaperService }                                                from '../services/app.services';
import { MotionSection, Section }                                           from '../models/section';
import { OrderType }                                                        from '../models/ordertype';
import { OrderPaper }                                                       from '../models/orderpaper';
import { DND_PROVIDERS, DND_DIRECTIVES }                                    from '../directives/dnd/ng2-dnd';

@Component({
    selector: 'test-order-paper',
    template: `<h1>{{id}}</h1>
                <div id="spinner"></div>
                <div class="navbar-fixed-top" style="box-shadow: 0 14px 24px -14px gray; position: relative">
                    <tabs>
                        <tab [title]="'Details'" (onActiveChange)="onCheckTabMode($event)">
                            <div class="row">
                                <button class="pull-right" onclick="$('#details').slideToggle();">click</button>
                            </div>
                            <div id="details">
                                <div class="row">
                                    <div class="col-md-2">
                                        Order Paper For:
                                    </div>
                                    <div class="col-md-4">
                                        <date-picker [id]="'test'" [IncludeTime]="true" (onValueChange)="dateChange($event)"></date-picker>
                                    </div>
                                    <div class="col-md-2">
                                        Order Paper Number:
                                    </div>
                                    <div class="col-md-4">
                                        <input [(ngModel)] = "orderPaper.OrderPaperNumber" placeholder="Order Paper Number" />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-2">
                                        Order Paper Status:
                                    </div>
                                    <div class="col-md-4">
                                        <select2 [id]="'orderPaperStatus'" [placeholder]="'status'" [enableSearch]="false" [multiple]="false" [data]="orderPaperStatus" (selected)="selected($event)"></select2>
                                    </div>
                                    <div class="col-md-2">
                                        Sitting Hours:
                                    </div>
                                    <div class="col-md-4">
                                        <input [(ngModel)] = "orderPaper.SittingHours" placeholder="Sitting Hours" /><br/>
                                    </div>
                                </div>
                            </div>
                        </tab>
                        <tab [title]="'Add Section'" (onActiveChange)="onCheckTabMode($event)">
                            <vertical-menu></vertical-menu>
                        </tab>
                        <tab [title]="'Preview'" (onActiveChange)="onCheckTabMode($event)">
                            <div class=" form row">
                                <a class="btn btn-lg save-button pull-right" (click)="printPreview($event)">
                                    <span class="glyphicon glyphicon-print"></span> Print
                                </a>
                                <a class="btn btn-lg save-button pull-left" (click)="openPreview($event)">
                                    <span class="glyphicon glyphicon-print"></span> Open
                                </a>
                            </div>
                        </tab>
                    </tabs>
                </div>
                <br/>
                <div class="form" *ngIf="isPreviewMode == false">
                    <ol type="1" id="{{SortableListId}}" class="list-sortable">
                        <li class="panel panel-info" *ngFor="let orderType of orderPaper.OrderTypes; let i = index">
                            <div class="panel-heading"></div>
                            <div class="panel-body">
                                <test-order-type [orderType] = "orderType" [index]="i"></test-order-type>
                            </div>
                        </li>
                    </ol>
                
                    <a class="btn btn-lg save-button" (click)="save($event)">
                        <span class="glyphicon glyphicon-floppy-disk"></span> Save
                    </a>

                </div>        
                <div class="form" id="order-paper-preview" *ngIf="isPreviewMode">
                    <div class="panel panel-info" *ngFor="let orderType of orderPaper.OrderTypes; let i = index">
                        <div class="panel-heading"></div>
                        <div class="panel-body">
                            <test-order-type-preview [orderType] = "orderType" [index]="i"></test-order-type-preview>
                        </div>
                    </div>
                </div>       
                `,
    styles: [],
    providers: [OrderPaperService, DND_PROVIDERS]
})
export class TestOrderPaperComponent extends BaseComponent implements OnInit {
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
    isPreviewMode: boolean;

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

    printPreview = (e: any) => {
        return xepOnline.Formatter.Format('order-paper-preview', { render: 'download' });
    }

    openPreview = (e: any) => {
        return xepOnline.Formatter.Format('order-paper-preview', { render: 'newwin' });
    }

    dateChange = (value: Date) => {
        this.orderPaperDate = value;
    }

    onCheckTabMode = (value: string) => {
        this.isPreviewMode = value == 'Preview';
    }

    updateSequence(oldIndex: number, newIndex: number): void {
        var oldSequence = oldIndex + 1;
        var newSequence = newIndex + 1;
    }
}