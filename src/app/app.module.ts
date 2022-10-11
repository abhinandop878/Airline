import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewAllAirlineComponent } from './view-all-airline/view-all-airline.component';
import { ViewAllPassengersComponent } from './view-all-passengers/view-all-passengers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewAllAirlineComponent,
    ViewAllPassengersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
