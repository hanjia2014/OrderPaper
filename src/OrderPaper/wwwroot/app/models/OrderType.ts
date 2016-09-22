import { Section, GroupItem } from './Section';

export class OrderType {
    IsFrontPage: boolean;
    Include: boolean;
    Name: string;
    Sections: Array<Section>;
    Groups: Array<Array<Section>>;
    GroupItems: Array<GroupItem>;
    constructor() {
        this.Sections = new Array<Section>();
        this.Groups = new Array<Array<Section>>();
        this.GroupItems = new Array<GroupItem>();
    }
}