import { Component, OnInit, ViewChild, ViewChildren, QueryList, NgZone, Input } from '@angular/core';
import { Response }                                                             from '@angular/http';
import { OrderPaper }                                                           from '../models/orderpaper';
import { BaseComponent }                                                        from './base.component';
import { MODAL_DIRECTIVES, ModalComponent }                                     from '../directives/ng2-bs3-modal/ng2-bs3-modal';
import { MotionSectionComponent }                                               from './sections/motion.section.component';
import { MotionSection, Section, BillSection, ReportSection }                   from '../models/section';
import { OrderType }                                                            from '../models/ordertype';

@Component({
    selector: 'test-order-type-preview',
    template: `
                    <h1>Title: {{orderType.Name}}</h1>
                    <div class="row">
                        <div *ngFor="let group of orderType.Groups; let i = index" class="col-sm-6">
                            <div class="panel">
                                {{'Group - ' + (i+1)}}
                                <div *ngFor="let groupItem of group; let i = index" class="list-group-item">
                                    <div class="panel-body">
                                        {{i+1}} -- {{groupItem.Type}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div class="row">
                        <div class="panel-body">
                            <ol type="1" id="{{SortableListId}}" class="list-sortable">
                                <li class="panel panel-info" *ngFor="let section of orderType.Sections; let i = index">
                                    <div class="panel-heading"></div>
                                    <div class="panel-body">
                                        <span *ngIf="section.Type == 'Motion'">
                                            <h1>Motion -- {{section.Sequence}}</h1>
                                            <div>
                                                Title: {{section.Title}}<br/>
                                                Speeches: {{section.Speeches}}<br/>
                                                Member: {{section.Member}}<br/>
                                                Date: {{section.Date}}<br/>
                                                Summary: {{section.Summary}}
                                            </div>
                                        </span>
                                        <span *ngIf="section.Type == 'Bill'">
                                            <h1>Bill -- {{section.Sequence}}</h1>
                                            <div>
                                                Title: {{section.Title}}<br/>
                                                Speeches: {{section.Speeches}}<br/>
                                                Member: {{section.Member}}<br/>
                                                Event: {{section.LatestEvent}}
                                            </div>
                                        </span>
                                        <span *ngIf="section.Type == 'Report'">
                                            <h1>Report -- {{section.Sequence}}</h1>
                                            <div>
                                                Title: {{section.Title}}<br/>
                                                Shoulder: {{section.Shoulder}}<br/>
                                                Committee: {{section.Committee}}<br/>
                                                LatestEvent: {{section.LatestEvent}}<br/>
                                            </div>
                                        </span>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                    `,
    styles: [],
    providers: []
})
export class TestOrderPaperTypePreviewComponent extends BaseComponent {
    @Input()
    orderType: OrderType;
    @Input()
    index: number;
    
    
    constructor(private zone: NgZone) {
        super();
    }
    updateSequence(oldIndex: number, newIndex: number): void {
    }
}