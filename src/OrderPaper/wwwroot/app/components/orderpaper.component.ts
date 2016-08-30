import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderPaper } from '../models/orderpaper';
import { OrderPaperService } from '../services/app.services';
import { BaseComponent } from './base.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Select2Component } from '../directives/select2';
import { DatePickerComponent } from '../directives/datepicker';
import { MODAL_DIRECTIVES, ModalComponent } from '../directives/ng2-bs3-modal/ng2-bs3-modal';
import { Tabs } from '../directives/tabs/tabs';
import { Tab } from '../directives/tabs/tab';
import { MotionSectionComponent } from './sections/motion.section.component';

@Component({
    selector: 'order-paper',
    template: `<h1>{{id}}</h1>
                <div id="spinner"></div>
                <tabs>
                    <tab [title]="'Details'">
                        <select2 [id]="selectId" [enableSearch]="false" [multiple]="false" [data]="items2" (selected)="selected($event)"></select2>
                        <date-picker [id]="'test'" [IncludeTime]="true" (onValueChange)="dateChange($event)"></date-picker><button type="button" class="btn btn-default" (click)="modal.open()">Add</button>

                    <ol type="1" id="{{SortableListId}}" class="list-sortable">
                        <li class="panel panel-info" *ngFor="let section of orderPaper.Sections; let i = index">
                            <div class="panel-heading" [style.background-color] = "section.IsGroup ? 'pink' : '#d9edf7'"></div>
                            <div class="panel-body">
                                <span><motion-section [index]="i" [motion]="section"></motion-section></span>
                                <input class="pull-right" type="button" (click)="openPaper(section.Sequence)" value="Edit" />
                            </div>
                        </li>
                    </ol>

                    </tab>
                    <tab [title]="'Preview'">
                    </tab>
                </tabs>
                <modal [animation]="animation" [keyboard]="keyboard" [backdrop]="backdrop" (onClose)="closed()" (onDismiss)="dismissed()"
                       (onOpen)="opened()" [cssClass]="cssClass" #modal>
                    <modal-header [show-close]="true">
                        <h4 class="modal-title">I'm a modal!</h4>
                    </modal-header>
                    <modal-body>
                        <input [(ngModel)]="orderPaper.Date" />
                    </modal-body>
                    <modal-footer [show-default-buttons]="true"></modal-footer>
                </modal>`,
    styles: [],
    directives: [Select2Component, DatePickerComponent, MODAL_DIRECTIVES, Tab, Tabs, MotionSectionComponent],
    providers: [OrderPaperService]
})
export class OrderPaperComponent extends BaseComponent implements OnInit {
    orderPaper: OrderPaper = new OrderPaper();
    error: any;
    sub: any;
    id: number;
    //select2
    selectedItem: any;
    selectId: string;
    items2 = [{ id: "Hearing Of Evidence", text: "Hearing Of Evidence" }, { id: "Consideration", text: "Consideration" }, { id: "Free Text", text: "Free Text" }];

    //datepicker
    orderPaperDate: Date;

    //modal
    @ViewChild('modals')
    modal: ModalComponent;

    constructor(private orderPaperService: OrderPaperService, private route: ActivatedRoute) {
        super();
    }
    ngOnInit() {
        this.SortableListId = 'draggableOrderPaperSectionList';
        var listElm = document.getElementById("spinner");
        this.spinner.spin(listElm);

        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.selectId = 'mySel' + this.id;
            this.orderPaperService.getOrderPaper(this.id).subscribe(
                (data: OrderPaper) => {
                    Object.assign(this.orderPaper, data);
                    this.spinner.stop();
                },
                (err: any) => this.error = err);
        });
    }
    public selected(value: any): void {
        this.selectedItem = value;
    }



    dateChange = (value: Date) => {
        this.orderPaperDate = value;
    }

    //modal
    opened() {

    }

    navigate() {

    }

    open() {
        this.modal.open();
    }
    closed() {

    }
    dismissed() {

    }

}