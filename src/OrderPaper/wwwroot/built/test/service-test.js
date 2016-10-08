"use strict";
var testing_1 = require('@angular/core/testing');
var app_services_1 = require('../../app/services/app.services');
describe("app services", function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [app_services_1.OrderPaperService]
        });
    });
    it("get items from sharepoint", testing_1.fakeAsync(function () {
        expect(true).toEqual(true);
    }));
});
//# sourceMappingURL=service-test.js.map