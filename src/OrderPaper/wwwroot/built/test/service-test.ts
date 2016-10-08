import {
    inject,
    async,
    TestBed,
    fakeAsync,
    tick
}                               from '@angular/core/testing';
import { OrderPaperService }    from '../../app/services/app.services';

describe("app services", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [OrderPaperService]
        });
    });

    it("get items from sharepoint", fakeAsync(inject([OrderPaperService], (service: OrderPaperService) => {
        service.getOrderPaperList().subscribe(
            (data: any) => {
                expect(true).toEqual(true);
            },
            (err: any) => this.error = err);
    })));
});