import { Type }                                     from '@angular/core';
import { MainComponent }                            from './main';
import { OrderPaperComponent }                      from './orderpaper.component';
import { NewOrderPaperComponent }                   from './new.orderpaper.component';
import { OrderPaperTypeComponent }                  from './orderpapertype.component';
import { MasterComponent }                          from './master.component'
import { TestDragulaComponent }                     from './test.dragula'
import { routing }                                  from './app.routes';
import { BillSectionComponent }                     from './sections/bill.section.component';
import { ReportSectionComponent }                   from './sections/report.section.component';
import { Select2Component }                         from '../directives/select2';
import { DatePickerComponent }                      from '../directives/datepicker';
import { MODAL_DIRECTIVES, ModalComponent }         from '../directives/ng2-bs3-modal/ng2-bs3-modal';
import { Tabs }                                     from '../directives/tabs/tabs';
import { Tab }                                      from '../directives/tabs/tab';
import { MotionSectionComponent }                   from './sections/motion.section.component';
import { Dragula }                                  from '../directives/dragula/dragula.directive';
import { TestAccordionComponent }                   from './test.accordion';
import { VerticalMenuComponent }                    from '../directives/vertical-menu/vertical-menu';


export const ORDERPAPER_DIRECTIVES = [
    ModalComponent,
    OrderPaperComponent,
    NewOrderPaperComponent,
    OrderPaperTypeComponent,
    MasterComponent,
    TestDragulaComponent,
    routing,
    BillSectionComponent,
    ReportSectionComponent,
    Select2Component,
    DatePickerComponent,
    MODAL_DIRECTIVES,
    ModalComponent,
    Tabs,
    Tab,
    MotionSectionComponent,
    Dragula,
    TestAccordionComponent,
    VerticalMenuComponent
];