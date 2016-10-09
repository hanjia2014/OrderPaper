import {
    inject,
    async,
    TestBed,
    fakeAsync,
    tick
}                               from '@angular/core/testing';
import { OrderPaperService }    from '../app/services/app.services';
import { BillSection }                 from '../app/models/section';

describe("app services", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [OrderPaperService]
        });
    });

    it("get items from sharepoint", () => {
        
        var bill = new BillSection();
        expect(bill.Type).toEqual("Bill");
    });
});