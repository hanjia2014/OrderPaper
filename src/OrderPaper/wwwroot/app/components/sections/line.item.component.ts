import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { LineSection } from '../../models/section';

@Component({
    selector: 'line-item',
    template: ` <div class="red-line">
                    <span class="pull-right" (click)="delete()">Delete</span>
                    <hr/>
                </div>
                `,
    styles: [`.red-line hr{
                color: #f00; 
                background-color: #f00; 
                height: 10px;
            }`],
    providers: []
})
export class LineItemComponent {
    @Input()
    line: LineSection;
    @Output()
    onDeleteLine = new EventEmitter<LineSection>();

    constructor() {
    }
    delete = () => {
        this.onDeleteLine.next(this.line);
    }
}