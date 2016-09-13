import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MotionSection } from '../../models/section';

@Component({
    selector: 'motion-section',
    template: `<h1>Motion -- {{motion.Sequence}}</h1>
                <div>
                    Title: {{motion.Title}}<br/>
                    Speeches: {{motion.Speeches}}<br/>
                    Member: {{motion.Member}}<br/>
                    Date: {{motion.Date}}<br/>
                    Summary: {{motion.Summary}}
                </div>`,
    styles: [],
    providers: []
})
export class MotionSectionComponent implements OnInit {
    @Input()
    motion: MotionSection;
    @Input()
    index: number;

    constructor() {
    }
    ngOnInit() {
        var m = this.motion;
    }
}