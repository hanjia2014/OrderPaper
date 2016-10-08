System.register(['@angular/core/testing', '../../app/services/app.services'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var _this = this;
    var testing_1, app_services_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (app_services_1_1) {
                app_services_1 = app_services_1_1;
            }],
        execute: function() {
            describe("app services", function () {
                beforeEach(function () {
                    testing_1.TestBed.configureTestingModule({
                        providers: [app_services_1.OrderPaperService]
                    });
                });
                it("get items from sharepoint", testing_1.fakeAsync(testing_1.inject([app_services_1.OrderPaperService], function (service) {
                    service.getOrderPaperList().subscribe(function (data) {
                        expect(true).toEqual(true);
                    }, function (err) { return _this.error = err; });
                })));
            });
        }
    }
});
//# sourceMappingURL=service-test.js.map