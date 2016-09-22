import { Component, ViewChild, Input, Output, EventEmitter }    from '@angular/core';
import { GroupItem }                                            from '../../models/section';

@Component({
    selector: 'group-item',
    template: `     <div class="row">
                        <div class="panel-body">
                            <input [(ngModel)]="fromSequence" placeholder="From" />
                            <input [(ngModel)]="toSequence" placeholder="To" />
                            <button class="btn" [disabled]="validateSequences()" (click)="addItems()">Add</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="panel-body" dnd-sortable-container [dropZones]="['drop-zone']" [sortableData]="group.Items">
                            <ol class="list-sortable">
                                <li *ngFor="let item of group.Items; let i = index" dnd-sortable [sortableIndex]="i" class="item-li">
                                    <div class="panel panel-info">
                                        <div class="panel-heading"></div>
                                        <div class="panel-body">
                                            <span *ngIf="item.Type == 'Motion'">motion</span>
                                            <span *ngIf="item.Type == 'Bill'">bill</span>
                                            <span *ngIf="item.Type == 'Report'">report</span>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>`,
    styles: [],
    providers: []
})
export class GroupItemComponent {
    @Input()
    group: GroupItem;
    @Input()
    groupIndex: number;
    @Input()
    dropZone: string;
    @Output()
    onAddItems = new EventEmitter<GroupItemComponent>();

    fromSequence: number;
    toSequence: number;

    constructor() {
    }

    addItems = () => {
        this.onAddItems.next(this);
    }

    validateSequences() {
        if (this.fromSequence == null) return true;
        if (this.toSequence == null) return true;
        if (this.fromSequence >= this.toSequence) return true;
        return false;
    }
}