import { Section } from './Section';

export class OrderType {
    IsFrontPage: boolean;
    Include: boolean;
    Name: string;
    Sections: Array<Section>;
    Groups: Array<Array<Section>>;
    constructor() {
        this.Sections = new Array<Section>();
        this.Groups = new Array<Array<Section>>();
    }
}