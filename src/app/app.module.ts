import { DivineComponent } from './divine/divine.component';
import { HeritageComponent } from './heritage/heritage.component';
import { AdventureComponent } from './adventure/adventure.component';
import { UniversalguardGuard } from './universalguard.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

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
import { LoginComponent } from './login/login.component';
import { PackagesComponent } from './packages/packages.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'holidays', component: HolidaysComponent, canActivate: [UniversalguardGuard],
                          canDeactivate: [UniversalguardGuard] },
  {path: 'agent', component: AgentManagerComponent},
  {path: 'packages', component: PackagesComponent,
               canActivate: [UniversalguardGuard], children: [

    {path: 'adventure', component: AdventureComponent },
    {path: 'adventure/:code', component: AdventureComponent },
    {path: 'heritage', component: HeritageComponent },
    {path: 'divine', component: DivineComponent },
  ]},

  {path: '**', redirectTo: 'holidays'}
];
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
    AgentReviewComponent,
    LoginComponent,
    PackagesComponent,
    AdventureComponent,
    HeritageComponent,
    DivineComponent,
    RegisterComponent
  ],

  imports: [
    BrowserModule, RouterModule.forRoot(routes), HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [HttpClient],
  entryComponents: [AgentReviewComponent],
  bootstrap: [AppComponent , RegisterComponent]
})
export class AppModule { }
