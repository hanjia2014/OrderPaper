import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderPaper } from '../models/orderpaper';
import { OrderPaperService } from '../services/app.services';
import { BaseComponent } from './base.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MotionSectionComponent } from './sections/motion.section.component';

@Component({
    selector: 'order-paper',
    template: `<h1>{{id}}</h1>
                <div id="spinner"></div>
                    <ol type="1" id="{{SortableListId}}" class="list-sortable">
                        <li class="panel panel-info" *ngFor="let section of orderPaper.Sections; let i = index">
                            <div class="panel-heading"></div>
                            <div class="panel-body">
                                <span><motion-section [index]="i" [motion]="section"></motion-section></span>
                                <input class="pull-right" type="button" (click)="openPaper(section.Sequence)" value="Edit" />
                            </div>
                        </li>
                    </ol>
                `,
    styles: [],
    directives: [MotionSectionComponent],
    providers: [OrderPaperService]
})
export class TestDragulaComponent extends BaseComponent implements OnInit {
    orderPaper: OrderPaper = new OrderPaper();
    error: any;
    sub: any;
    id: number;
    
    constructor(private orderPaperService: OrderPaperService, private route: ActivatedRoute) {
        super();
    }
    ngOnInit() {
        this.SortableListId = 'draggableOrderPaperSectionList';
        var listElm = document.getElementById("spinner");
        this.spinner.spin(listElm);

        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.orderPaperService.getOrderPaper(this.id).subscribe(
                (data: OrderPaper) => {
                    Object.assign(this.orderPaper, data);
                    this.spinner.stop();
                },
                (err: any) => this.error = err);
        });
    }
}