import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ReportSection } from '../../models/section';

@Component({
    selector: 'report-section',
    template: `<h1>Report -- {{report.Sequence}}</h1>
                <div class="container">
                    <div class="row">
                        Group: <input type="checkbox" [(ngModel)]="report.IsGroup">
                        <br/>
                        Title: {{report.Title}}<br/>
                        Shoulder: {{report.Shoulder}}<br/>
                        Committee: {{report.Committee}}<br/>
                        LatestEvent: {{report.LatestEvent}}<br/>
                    </div>
                </div>`,
    styles: [],
    providers: []
})
export class ReportSectionComponent implements OnInit {
    @Input()
    report: ReportSection;
    @Input()
    index: number;

    constructor() {
    }
    ngOnInit() {
        var m = this.report;
    }
}