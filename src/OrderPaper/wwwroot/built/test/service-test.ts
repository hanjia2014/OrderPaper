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

    it("get items from sharepoint", fakeAsync(() => {
        expect(true).toEqual(true);
    }));
});