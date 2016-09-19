import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ReportSection } from '../../models/section';

@Component({
    selector: 'report-section',
    template: `<h1>Report -- {{report.Sequence}}</h1>
                <div>
                    Line: <input type="checkbox" [(ngModel)]="report.HasLine" /><br />
                    Title: {{report.Title}}<br/>
                    Shoulder: {{report.Shoulder}}<br/>
                    Committee: {{report.Committee}}<br/>
                    LatestEvent: {{report.LatestEvent}}<br/>
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