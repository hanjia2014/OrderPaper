import { Status } from './constants';
import { Section } from './Section';
import { OrderType } from './OrderType';

export class OrderPaper {
    FrontPage: boolean;
    Include: boolean;
    OrderType: string;
    Details: string;
    Speeches: string;
    Sections: Array<Section>;
    OrderTypes: Array<OrderType>;
}