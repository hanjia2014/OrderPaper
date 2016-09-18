import { Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
import { BillSection } from '../../models/section';

@Component({
    selector: 'bill-section',
    template: `
                <div class="undraggable">
                   <h1>Bill -- {{bill.Sequence}}</h1>
                   <div class="row">
                       <div class="col-md-2">
                           Title:
                       </div>
                       <div class="col-md-8">
                           <input class="undraggable" [(ngModel)] = "bill.Title" placeholder="Title" />
                       </div>
                   </div>    
                   <div class="row">
                       <div class="col-md-2">
                           Speeches:
                       </div>
                       <div class="col-md-8">
                           <input class="undraggable" [(ngModel)] = "bill.Speeches" placeholder="Speeches" />
                       </div>
                   </div>   
                   <div class="row">
                       <div class="col-md-2">
                           Member:
                       </div>
                       <div class="col-md-8">
                           <input class="undraggable" [(ngModel)] = "bill.Member" placeholder="Member" />
                       </div>
                   </div>   
                   <div class="row">
                       <div class="col-md-2">
                           Latest event:
                       </div>
                       <div class="col-md-8">
                           <input class="undraggable" [(ngModel)] = "bill.LatestEvent" placeholder="Latest Event" />
                       </div>
                   </div>
                </div>
                `,
    styles: [],
    providers: []
})
export class BillSectionComponent implements OnInit, AfterViewInit {
    @Input()
    bill: BillSection;
    @Input()
    index: number;

    constructor() {
    }
    ngOnInit() {
        var m = this.bill;
    }

    ngAfterViewInit() {
        $('.undraggable')
            .on('focus', function (e) {
                $('.panel').attr("draggable", "false");
            })
            .on('blur', function (e) {
                $('.panel').attr("draggable", "true");
            });
    }
}