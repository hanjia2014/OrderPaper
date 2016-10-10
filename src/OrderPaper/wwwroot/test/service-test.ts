import {
    inject,
    async,
    TestBed,
    fakeAsync,
    tick
}                                   from '@angular/core/testing';
import {
    MockBackend,
    MockConnection
}                                   from '@angular/http/testing';

import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting
}                                   from "@angular/platform-browser-dynamic/testing";
import { OrderPaperService }        from '../app/services/app.services';
import {
    Http,
    BaseRequestOptions,
    ConnectionBackend,
    RequestOptions,
    Response,
    ResponseOptions,
    RequestMethod,
    HttpModule
}                                    from '@angular/http';

describe("app services test", () => {
    beforeEach(() => {
        // Must reset the test environment before initializing it.
        TestBed.resetTestEnvironment();

        TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting())
            .configureTestingModule({
                providers: [
                    OrderPaperService,
                    MockBackend,
                    BaseRequestOptions,
                    { provide: ConnectionBackend, useClass: MockBackend },
                    { provide: RequestOptions, useClass: BaseRequestOptions },
                    Http
                ],
                imports: [
                    HttpModule
                ],
            });
    });

    it('get 2 items from api', async(inject([OrderPaperService], (orderPaperService: OrderPaperService) => {
        orderPaperService.getOrderPaperList().subscribe(
            (data: any) => {
                expect(data.length).toEqual(2);
            },
            (err: any) => this.error = err);
    })));
});