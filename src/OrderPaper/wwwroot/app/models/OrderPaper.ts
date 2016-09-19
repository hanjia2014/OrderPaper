import { Status } from './constants';
import { Section, MotionSection, BillSection, ReportSection } from './Section';
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

        var billSection = new BillSection();
        var reportSection = new ReportSection();
        reportSection.HasLine = true;
        var motionSection = new MotionSection();
        orderType.Sections.push(billSection);
        orderType.Sections.push(reportSection);
        orderType.Sections.push(motionSection);
        this.OrderTypes.push(orderType);

        orderType = new OrderType();
        orderType.Include = true;
        orderType.Name = "Select committee reports";
        this.OrderTypes.push(orderType);
    }
}