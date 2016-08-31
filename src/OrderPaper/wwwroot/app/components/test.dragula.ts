import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderPaper } from '../models/orderpaper';
import { OrderPaperService } from '../services/app.services';
import { BaseComponent } from './base.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MotionSectionComponent } from './sections/motion.section.component';
import { Dragula } from '../directives/dragula/dragula.directive';
import { DragulaService } from '../directives/dragula/dragula.provider';

@Component({
    selector: 'order-paper',
    viewProviders: [DragulaService],
    templateUrl: `app/components/test-dragula.html`,
    styles: [],
    directives: [MotionSectionComponent, Dragula],
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

    updateSequence(oldIndex: number, newIndex: number): void {
        alert("test dragula component -- old: " + oldIndex + " new: " + newIndex);
    }
}