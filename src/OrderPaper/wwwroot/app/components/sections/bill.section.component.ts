import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { BillSection } from '../../models/section';

@Component({
    selector: 'bill-section',
    template: `<h1>Bill -- {{bill.Sequence}}</h1>
                <div class="row">
                    <div class="col-md-2">
                        Title:
                    </div>
                    <div class="col-md-8">
                        <input [(ngModel)] = "bill.Title" placeholder="Title" />
                    </div>
                </div>    
                <div class="row">
                    <div class="col-md-2">
                        Speeches:
                    </div>
                    <div class="col-md-8">
                        <input [(ngModel)] = "bill.Speeches" placeholder="Speeches" />
                    </div>
                </div>   
                <div class="row">
                    <div class="col-md-2">
                        Member:
                    </div>
                    <div class="col-md-8">
                        <input [(ngModel)] = "bill.Member" placeholder="Member" />
                    </div>
                </div>   
                <div class="row">
                    <div class="col-md-2">
                        Latest event:
                    </div>
                    <div class="col-md-8">
                        <input [(ngModel)] = "bill.LatestEvent" placeholder="Latest Event" />
                    </div>
                </div>
                `,
    styles: [],
    providers: []
})
export class BillSectionComponent implements OnInit {
    @Input()
    bill: BillSection;
    @Input()
    index: number;

    constructor() {
    }
    ngOnInit() {
        var m = this.bill;
    }
}