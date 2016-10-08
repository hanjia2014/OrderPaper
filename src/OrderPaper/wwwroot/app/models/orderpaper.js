System.register(['./Section', './OrderType'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Section_1, OrderType_1;
    var OrderPaper;
    return {
        setters:[
            function (Section_1_1) {
                Section_1 = Section_1_1;
            },
            function (OrderType_1_1) {
                OrderType_1 = OrderType_1_1;
            }],
        execute: function() {
            OrderPaper = (function () {
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
            exports_1("OrderPaper", OrderPaper);
        }
    }
});
//# sourceMappingURL=OrderPaper.js.map