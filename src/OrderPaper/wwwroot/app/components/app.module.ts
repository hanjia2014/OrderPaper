﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Response }     from '@angular/http';
import { MainComponent }  from './main';
import { OrderPaperComponent }  from './orderpaper.component';
import { MasterComponent } from './master.component'
import { TestDragulaComponent } from './test.dragula'
import { routing }        from './app.routes';

import { Select2Component } from '../directives/select2';
import { DatePickerComponent } from '../directives/datepicker';
import { MODAL_DIRECTIVES, ModalComponent } from '../directives/ng2-bs3-modal/ng2-bs3-modal';
import { Tabs } from '../directives/tabs/tabs';
import { Tab } from '../directives/tabs/tab';
import { MotionSectionComponent } from './sections/motion.section.component';
import { Dragula } from '../directives/dragula/dragula.directive';
import { TestAccordionComponent } from './test.accordion';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, routing],
    declarations: [MasterComponent, MainComponent, OrderPaperComponent, TestDragulaComponent, Select2Component, DatePickerComponent, MODAL_DIRECTIVES, Tabs, Tab, MotionSectionComponent, Dragula, TestAccordionComponent],
    bootstrap: [MasterComponent],
    providers: []
})
export class AppModule { }