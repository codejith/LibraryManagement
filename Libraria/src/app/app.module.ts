import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { BaseServicesService } from  './Services/base-services.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BaseServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
