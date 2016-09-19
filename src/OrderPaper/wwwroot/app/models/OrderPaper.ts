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
    OrderPaperNumber: string;
    SittingHours: string;

    constructor() {
        this.OrderTypes = new Array<OrderType>();

        var orderType = new OrderType();
        orderType.IsFrontPage = true;
        orderType.Name = "Oral questions";
        this.OrderTypes.push(orderType);

        orderType = new OrderType();
        orderType.Include = true;
        orderType.Name = "Select committee reports";
        this.OrderTypes.push(orderType);
    }
}