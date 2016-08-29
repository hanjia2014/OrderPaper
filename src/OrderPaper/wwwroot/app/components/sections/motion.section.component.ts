import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MotionSection } from '../../models/section';

@Component({
    selector: 'motion-section',
    template: `<h1>Motion -- {{index}}</h1>
                <div class="container">
                    <div class="row">
                        Title: {{motion.Title}}<br/>
                        Speeches: {{motion.Speeches}}<br/>
                        Member: {{motion.Member}}<br/>
                        Motion: {{motion.Motion}}<br/>
                        Date: {{motion.Date}}<br/>
                        Summary: {{motion.Summary}}
                    </div>
                </div>`,
    styles: [],
    directives: [],
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
    }
}