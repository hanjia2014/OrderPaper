import { Section } from './Section';

export class OrderType {
    IsFrontPage: boolean;
    Include: boolean;
    Name: string;
    Sections: Array<Section>;

    constructor() {
        this.Sections = new Array<Section>();
    }
}