import { NgModule }                                 from '@angular/core';
import { BrowserModule }                            from '@angular/platform-browser';
import { FormsModule }                              from '@angular/forms';
import { HttpModule, Response }                     from '@angular/http';
import { LocationStrategy, HashLocationStrategy }   from '@angular/common';
import { MainComponent }                            from './main';
import { OrderPaperComponent }                      from './orderpaper.component';
import { NewOrderPaperComponent }                   from './new.orderpaper.component';
import { OrderPaperTypeComponent }                  from './orderpapertype.component';
import { MasterComponent }                          from './master.component'
import { TestDragulaComponent }                     from './test.dragula'
import { routing }                                  from './app.routes';
import { BillSectionComponent }                     from './sections/bill.section.component';
import { ReportSectionComponent }                   from './sections/report.section.component';
import { MotionSectionComponent }                   from './sections/motion.section.component';
import { LineItemComponent }                        from './sections/line.item.component';
import { GroupItemComponent }                       from './sections/group.item.component';
import { Select2Component }                         from '../directives/select2';
import { DatePickerComponent }                      from '../directives/datepicker';
import { MODAL_DIRECTIVES, ModalComponent }         from '../directives/ng2-bs3-modal/ng2-bs3-modal';
import { Tabs }                                     from '../directives/tabs/tabs';
import { Tab }                                      from '../directives/tabs/tab';
import { Dragula }                                  from '../directives/dragula/dragula.directive';
import { TestAccordionComponent }                   from './test.accordion';
import { TestDndComponent }                         from './test.dnd';
import { TestOrderPaperComponent }                  from './test.orderpaper.component';
import { TestOrderPaperTypeComponent }              from './test.orderpapertype.component';
import { TestOrderPaperTypePreviewComponent }       from './test.orderpapertype.preview.component';
import { VerticalMenuComponent }                    from '../directives/vertical-menu/vertical-menu';
import { DND_DIRECTIVES }                           from '../directives/dnd/ng2-dnd';
import { NKDatetimeModule }                         from '../directives/datetime/ng2-datetime.module';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, NKDatetimeModule, routing],
    declarations: [MasterComponent,
        LineItemComponent,
        GroupItemComponent,
        TestOrderPaperTypePreviewComponent,
        TestOrderPaperComponent,
        TestOrderPaperTypeComponent,
        TestDndComponent,
        DND_DIRECTIVES,
        MainComponent,
        OrderPaperComponent,
        OrderPaperTypeComponent,
        TestDragulaComponent,
        NewOrderPaperComponent,
        Select2Component,
        DatePickerComponent,
        MODAL_DIRECTIVES,
        Tabs,
        Tab,
        MotionSectionComponent,
        BillSectionComponent,
        ReportSectionComponent,
        Dragula,
        TestAccordionComponent,
        VerticalMenuComponent
    ],
    bootstrap: [MasterComponent],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppModule { }