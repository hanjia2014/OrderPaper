﻿import { Component, OnInit, ViewChild, ViewChildren, QueryList, NgZone } from '@angular/core';
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
import { Response }     from '@angular/http';
import { MotionSection }     from '../models/section';

@Component({
    selector: 'order-paper',
    template: `<h1>{{id}}</h1>
                <div id="spinner"></div>
                <tabs>
                    <tab [title]="'Details'">
                        <select2 [id]="selectId" [enableSearch]="false" [multiple]="false" [data]="items2" (selected)="selected($event)"></select2>
                        <date-picker [id]="'test'" [IncludeTime]="true" (onValueChange)="dateChange($event)"></date-picker><button type="button" class="btn btn-default" (click)="modal.open()">Add</button>
                        <br/>
                    <ol type="1" id="{{SortableListId}}" class="list-sortable">
                        <li class="panel panel-info" *ngFor="let section of orderPaper.Sections; let i = index">
                            <div class="panel-heading" [style.background-color] = "section.IsGroup ? 'pink' : '#d9edf7'"></div>
                            <div class="panel-body">
                                <span><motion-section [index]="i" [motion]="section"></motion-section></span>
                                <input class="pull-right" type="button" (click)="openPaper(section.Sequence)" value="Edit" />
                            </div>
                        </li>
                    </ol>

                    <a class="btn btn-lg save-button" (click)="save($event)">
                        <span class="glyphicon glyphicon-floppy-disk"></span> Save Agenda
                    </a>

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
    //test
    updatedSection: MotionSection = new MotionSection();
    //modal
    @ViewChild('modals')
    modal: ModalComponent;

    @ViewChildren(MotionSectionComponent)
    children: QueryList<MotionSectionComponent>;

    constructor(private orderPaperService: OrderPaperService, private route: ActivatedRoute, private zone: NgZone) {
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
    //save
    save = (e: any) => {
        var t = this.children;
        //var olElem = $("#" + this.SortableListId)[0].children[0];
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


        this.orderPaper.Sections.forEach((section) => {
            if (section.Sequence == oldSequence) {
                this.zone.runOutsideAngular(() => {
                    this.zone.run(() => {

                        if (oldSequence > newSequence) {
                            this.orderPaper.Sections.forEach((section) => {
                                if (section.Sequence == oldSequence)
                                    this.updatedSection = section;
                            });

                            this.orderPaper.Sections.forEach((section) => {
                                if (section.Sequence >= newSequence && section.Sequence < oldSequence)
                                    section.Sequence = section.Sequence + 1;
                            });

                            this.updatedSection.Sequence = newSequence;
                        }
                    });
                })
            }
        });

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