import { Component, OnInit, ViewChild, ViewChildren, QueryList, NgZone, Input } from '@angular/core';
import { OrderPaper } from '../models/orderpaper';
import { BaseComponent } from './base.component';
import { MODAL_DIRECTIVES, ModalComponent } from '../directives/ng2-bs3-modal/ng2-bs3-modal';
import { MotionSectionComponent } from './sections/motion.section.component';
import { Response }     from '@angular/http';
import { MotionSection, Section, BillSection, ReportSection }     from '../models/section';
import { OrderType }     from '../models/ordertype';

@Component({
    selector: 'order-type',
    template: `
                    <div class="row">
                        <div class="col-md-2">
                            Front Page
                        </div>
                        <div class="col-md-1">
                            Include
                        </div>
                        <div class="col-md-4">
                            Order Type
                        </div>
                        <div class="col-md-3">
                        
                        </div>
                        <div class="col-md-2">
                        
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            <input type="checkbox" [(ngModel)]="orderType.IsFrontPage" />
                        </div>
                        <div class="col-md-1">
                            <input type="checkbox" [(ngModel)]="orderType.Include" />
                        </div>
                        <div class="col-md-4">
                            <input [(ngModel)]="orderType.Name" />
                        </div>
                        <div class="col-md-3">
                            <select2 [id]="'mySel' + index" [enableSearch]="false" [multiple]="false" [data]="sectionTypes" (selected)="selected($event)"></select2>
                            <input type="button" class="btn" value="Add" (click)="addSection()" />
                        </div>
                        <div class="col-md-2">
                            <a href="#" (click)="toggle($event)">{{isExpand ? 'Expand' : 'Collapse'}}</a>
                        </div>
                    </div>
                    <div class="row">
                            <ol type="1" id="{{SortableListId}}" class="list-sortable">
                                <li class="panel panel-info" *ngFor="let section of orderType.Sections; let i = index">
                                    <div class="panel-heading"></div>
                                    <div class="panel-body">
                                        <span *ngIf="section.Type == 'Motion'"><motion-section [index]="i" [motion]="section"></motion-section></span>
                                        <span *ngIf="section.Type == 'Bill'"><bill-section [index]="i" [bill]="section"></bill-section></span>
                                        <span *ngIf="section.Type == 'Report'"><report-section [index]="i" [report]="section"></report-section></span>
                                    </div>
                                </li>
                            </ol>
                    </div>`,
    styles: [],
    providers: []
})
export class OrderPaperTypeComponent extends BaseComponent implements OnInit {
    error: any;
    sub: any;
    id: number;
    //select2
    selectedSectionType: any;
    selectId: string;
    sectionTypes = [{ id: "Bill", text: "Bill" }, { id: "Motion", text: "Motion" }, { id: "Report", text: "Report" }];
    //
    @Input()
    orderType: OrderType;
    @Input()
    index: number;
    //modal
    @ViewChild('modals')
    modal: ModalComponent;

    @ViewChildren(MotionSectionComponent)
    children: QueryList<MotionSectionComponent>;

    constructor(private zone: NgZone) {
        super();
    }

    ngOnInit() {
        this.SortableListId = 'draggableOrderTypeSectionList' + this.index;
    }
    public selected(value: any): void {
        this.selectedSectionType = value;
    }
    //save
    save = (e: any) => {
    }
    updateSequence(oldIndex: number, newIndex: number): void {
        var oldSequence = oldIndex + 1;
        var newSequence = newIndex + 1;
    }

    addSection() {
        if (this.selectedSectionType == "Bill") {
            this.orderType.Sections.push(new BillSection());
        }
        else if (this.selectedSectionType == "Report") {
            this.orderType.Sections.push(new ReportSection());
        }
        else if (this.selectedSectionType == "Motion") {
            this.orderType.Sections.push(new MotionSection());
        }
    }
}