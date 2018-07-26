import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { ListComponent } from './list/list.component';
import { ProcessOrderComponent } from './process-order/process-order.component';
import { AsiaTourComponent } from './asia-tour/asia-tour.component';
import { IndiaTourComponent } from './india-tour/india-tour.component';
import { HightLightDirective } from './hight-light.directive';
import { ResizeDirective } from './resize.directive';
import { AgentManagerComponent } from './agent-manager/agent-manager.component';
import { FilterPipe } from './filter.pipe';
import { AgentReviewComponent } from './agent-review/agent-review.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HolidaysComponent,
    ListComponent,
    ProcessOrderComponent,
    AsiaTourComponent,
    IndiaTourComponent,
    HightLightDirective,
    ResizeDirective,
    AgentManagerComponent,
    FilterPipe,
    AgentReviewComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [HttpClient],
  entryComponents: [AgentReviewComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
