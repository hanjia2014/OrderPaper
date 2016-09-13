import { Component, OnInit, ViewChild, ViewChildren, QueryList, NgZone, Input } from '@angular/core';
import { Response }                                                             from '@angular/http';
import { OrderPaper }                                                           from '../models/orderpaper';
import { BaseComponent }                                                        from './base.component';
import { MODAL_DIRECTIVES, ModalComponent }                                     from '../directives/ng2-bs3-modal/ng2-bs3-modal';
import { MotionSectionComponent }                                               from './sections/motion.section.component';
import { MotionSection, Section, BillSection, ReportSection }                   from '../models/section';
import { OrderType }                                                            from '../models/ordertype';

@Component({
    selector: 'test-order-type',
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
                        <div class="col-md-3">
                            <input [(ngModel)]="orderType.Name" />
                        </div>
                        <div class="col-md-1">
                            <button (click)="addGroup()">Add Group</button>
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
                        <div *ngFor="let group of groups; let i = index">
                            <div class="panel-body" dnd-sortable-container [dropZones]="['drop-zone']" [sortableData]="group">
                                <div class="panel panel-warning">
                                    <div class="panel-heading">
                                      {{'Group - ' + (i+1)}}
                                    </div>
                                    <div class="panel-body">
                                        <ol class="list-group" >
                                          <li *ngFor="let groupItem of group; let i = index" class="list-group-item" dnd-sortable [sortableIndex]="i">
                                            <div class="panel-heading"></div>
                                            <div class="panel-body">
                                                {{i+1}}) {{groupItem.Type}}
                                            </div>
                                          </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="row">
                        <div class="panel-body" dnd-sortable-container [dropZones]="['drop-zone']" [sortableData]="orderType.Sections">
                            <ol type="1" id="{{SortableListId}}" class="list-sortable">
                                <li class="panel panel-info" *ngFor="let section of orderType.Sections; let i = index" dnd-sortable [sortableIndex]="i">
                                    <div class="panel-heading"></div>
                                    <div class="panel-body">
                                        {{section.Type}}
                                        <!--<span *ngIf="section.Type == 'Motion'"><motion-section [index]="i" [motion]="section"></motion-section></span>
                                        <span *ngIf="section.Type == 'Bill'"><bill-section [index]="i" [bill]="section"></bill-section></span>
                                        <span *ngIf="section.Type == 'Report'"><report-section [index]="i" [report]="section"></report-section></span>-->
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <a *ngIf="orderType.Sections.length > 0" class="btn btn-lg save-button pull-right" (click)="save($event)">
                        <span class="glyphicon glyphicon-floppy-disk"></span> Save
                    </a>
                    `,
    styles: [],
    providers: []
})
export class TestOrderPaperTypeComponent extends BaseComponent implements OnInit {
    error: any;
    sub: any;
    id: number;
    //select2
    selectedSectionType: any;
    selectId: string;
    sectionTypes = [{ id: "Bill", text: "Bill" }, { id: "Motion", text: "Motion" }, { id: "Report", text: "Report" }];
    //
    groups: Array<Array<Section>> = new Array<Array<Section>>();
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
        var type = this.orderType;
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
    addGroup() {
        var group = new Array<Section>();
        this.groups.push(group);
    }
}