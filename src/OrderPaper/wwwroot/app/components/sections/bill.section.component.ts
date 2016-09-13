import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { BillSection } from '../../models/section';

@Component({
    selector: 'bill-section',
    template: `<h1>Bill -- {{bill.Sequence}}</h1>
                <div>
                    Title: {{bill.Title}}<br/>
                    Speeches: {{bill.Speeches}}<br/>
                    Member: {{bill.Member}}<br/>
                    Speeches: {{bill.Speeches}}<br/>
                    Latest event: {{bill.LatestEvent}}
                </div>`,
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