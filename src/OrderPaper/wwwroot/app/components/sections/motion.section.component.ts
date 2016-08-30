import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MotionSection } from '../../models/section';

@Component({
    selector: 'motion-section',
    template: `<h1>Motion -- {{index}}</h1>
                <div class="container">
                    <div class="row">
                        Group: <input type="checkbox" [(ngModel)]="motion.IsGroup">
                        <br/>
                        Title: {{motion.Title}}<br/>
                        Speeches: {{motion.Speeches}}<br/>
                        Member: {{motion.Member}}<br/>
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
        var m = this.motion;
    }
}