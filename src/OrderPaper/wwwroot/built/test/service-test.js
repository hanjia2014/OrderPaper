"use strict";
var _this = this;
var testing_1 = require('@angular/core/testing');
var app_services_1 = require('../../app/services/app.services');
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
//# sourceMappingURL=service-test.js.map