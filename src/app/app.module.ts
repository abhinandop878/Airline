import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewAllAirlineComponent } from './view-all-airline/view-all-airline.component';
import { ViewAllPassengersComponent } from './view-all-passengers/view-all-passengers.component';
import {HttpClientModule} from '@angular/common/http';
const appRoutes:Routes=[
  {
    path:"",component:ViewAllAirlineComponent
  },
  {
    path:"Passengers",component:ViewAllPassengersComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewAllAirlineComponent,
    ViewAllPassengersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
