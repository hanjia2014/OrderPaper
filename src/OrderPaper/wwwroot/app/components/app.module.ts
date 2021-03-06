﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MainComponent }  from './main';
import { OrderPaperComponent }  from './orderpaper.component';
import { MasterComponent } from './master.component'
import { TestDragulaComponent } from './test.dragula'
import { routing }        from './app.routes';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, routing],
    declarations: [MasterComponent, MainComponent, OrderPaperComponent, TestDragulaComponent],
    bootstrap: [MasterComponent],
    providers: []
})
export class AppModule { }