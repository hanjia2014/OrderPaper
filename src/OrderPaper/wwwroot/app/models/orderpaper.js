"use strict";
var Section_1 = require('./Section');
var OrderType_1 = require('./OrderType');
var OrderPaper = (function () {
    function OrderPaper() {
        this.OrderTypes = new Array();
        var orderType = new OrderType_1.OrderType();
        orderType.IsFrontPage = true;
        orderType.Name = "Oral questions";
        var billSection = new Section_1.BillSection();
        var reportSection = new Section_1.ReportSection();
        var motionSection = new Section_1.MotionSection();
        orderType.Sections.push(billSection);
        orderType.Sections.push(reportSection);
        orderType.Sections.push(motionSection);
        this.OrderTypes.push(orderType);
        orderType = new OrderType_1.OrderType();
        orderType.Include = true;
        orderType.Name = "Select committee reports";
        this.OrderTypes.push(orderType);
    }
    return OrderPaper;
}());
exports.OrderPaper = OrderPaper;
//# sourceMappingURL=OrderPaper.js.map