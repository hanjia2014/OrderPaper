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

    constructor() {
        this.OrderTypes = new Array<OrderType>();

        var orderType = new OrderType();
        orderType.Name = "Oral questions";
        this.OrderTypes.push(orderType);

        orderType = new OrderType();
        orderType.Name = "Select committee reports";
        this.OrderTypes.push(orderType);

        orderType = new OrderType();
        orderType.Name = "Introduction of bills";
        this.OrderTypes.push(orderType);

        orderType = new OrderType();
        orderType.Name = "Papers";
        this.OrderTypes.push(orderType);

        orderType = new OrderType();
        orderType.Name = "Government orders of the day";
        this.OrderTypes.push(orderType);

        orderType = new OrderType();
        orderType.Name = "Private and local orders of the day";
        this.OrderTypes.push(orderType);

        orderType = new OrderType();
        orderType.Name = "Debate on Prime Minister's statement";
        this.OrderTypes.push(orderType);

        orderType = new OrderType();
        orderType.Name = "Valedictory statement (at X.XX pm)";
        this.OrderTypes.push(orderType);

        orderType = new OrderType();
        orderType.Name = "General debate";
        this.OrderTypes.push(orderType);

        orderType = new OrderType();
        orderType.Name = "Address in reply";
        this.OrderTypes.push(orderType);

        orderType = new OrderType();
        orderType.Name = "Consideration of report of the Privileges Committee";
        this.OrderTypes.push(orderType);

        orderType = new OrderType();
        orderType.Name = "Budget debate and other Government orders of the day";
        this.OrderTypes.push(orderType);

        orderType = new OrderType();
        orderType.Name = "Budget policy statement";
        this.OrderTypes.push(orderType);

        orderType = new OrderType();
        orderType.Name = "Budget statement";
        this.OrderTypes.push(orderType);

        orderType = new OrderType();
        orderType.Name = "Maiden statement";
        this.OrderTypes.push(orderType);

        orderType = new OrderType();
        orderType.Name = "Address in reply";
        this.OrderTypes.push(orderType);

        orderType = new OrderType();
        orderType.Name = "Extended sittings";
        this.OrderTypes.push(orderType);

        orderType = new OrderType();
        orderType.Name = "State-opening day";
        this.OrderTypes.push(orderType);

        orderType = new OrderType();
        orderType.Name = "Extended sitting";
        this.OrderTypes.push(orderType);
    }
}