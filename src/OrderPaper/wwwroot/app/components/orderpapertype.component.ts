import { Component, OnInit, ViewChild, ViewChildren, QueryList, NgZone, Input } from '@angular/core';
import { OrderPaper } from '../models/orderpaper';
import { OrderPaperService } from '../services/app.services';
import { BaseComponent } from './base.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MODAL_DIRECTIVES, ModalComponent } from '../directives/ng2-bs3-modal/ng2-bs3-modal';
import { MotionSectionComponent } from './sections/motion.section.component';
import { Response }     from '@angular/http';
import { MotionSection, Section }     from '../models/section';
import { OrderType }     from '../models/ordertype';

@Component({
    selector: 'order-type',
    template: `
                <div class="row">
                    <div class="col-md-2">
                        <input type="checkbox" [(ngModel)]="orderType.IsFrontPage" />
                    </div>
                    <div class="col-md-2">
                        <input type="checkbox" [(ngModel)]="orderType.Include" />
                    </div>
                    <div class="col-md-5">
                        <input [(ngModel)]="orderType.Name" />
                    </div>
                    <div class="col-md-3">
                    </div>
                </div>`,
    styles: [],
    providers: [OrderPaperService]
})
export class OrderPaperTypeComponent extends BaseComponent implements OnInit {
    error: any;
    sub: any;
    id: number;
    //select2
    selectedItem: any;
    selectId: string;
    items2 = [{ id: "Bill", text: "Bill" }, { id: "Motion", text: "Motion" }, { id: "Report", text: "Report" }];
    //
    @Input()
    orderType: OrderType;
    //modal
    @ViewChild('modals')
    modal: ModalComponent;

    @ViewChildren(MotionSectionComponent)
    children: QueryList<MotionSectionComponent>;

    constructor(private orderPaperService: OrderPaperService, private route: ActivatedRoute, private zone: NgZone) {
        super();
    }

    ngOnInit() {
        this.SortableListId = 'draggableOrderTypeSectionList';
    }
    public selected(value: any): void {
        this.selectedItem = value;
    }
    //save
    save = (e: any) => {
    }

    updateSequence(oldIndex: number, newIndex: number): void {
        var oldSequence = oldIndex + 1;
        var newSequence = newIndex + 1;
    }
}