import {Component} from '@angular/core';
import {Accordion} from '../directives/accordion/accordion';
import {AccordionGroup} from '../directives/accordion/accordiongroup';

@Component({
    selector: 'my-app',
    template: `
                <p>
                  <button type="button" class="btn btn-default" (click)="removeAngular2AccordionGroup()">
                    Remove a group from the dynamic content!
                  </button>
                   <button type="button" class="btn btn-default" (click)="addAngular2AccordionGroup()">
                    Add Content!
                  </button>
                </p>
             `,

    directives: [Accordion, AccordionGroup]
})
export class TestAccordionComponent {
    isGroupOpen = false;

    groups: Array<any> = [
        {
            heading: 'Angular2Accordion Dynamic Content A',
            content: ' I’m a dynamic content to show in angular 2 accordion : )'
        },
        {
            heading: 'Angular2Accordion Dynamic Content B',
            content: 'I’m a dynamic content to show in angular 2 accordion : )'
        },
        {
            heading: 'Angular2Accordion HTML Content C',
            content: 'I’m a dynamic content to show in angular 2 accordion : ) '
        }
    ];

    removeAngular2AccordionGroup() {
        this.groups.splice(1, 1);
    }

    addAngular2AccordionGroup() {
        let accordionGroupContent = { heading: 'Hi New Content !', content: 'Content angular 2 accordion ' };
        this.groups.splice(1, 0, accordionGroupContent);
    }
}