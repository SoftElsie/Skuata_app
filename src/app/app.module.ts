import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterOutlet } from '@angular/router';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
      AppComponent,
     DashboardComponent,
     FilterComponent
  ],
  imports: [
      RouterOutlet,
    BrowserModule, HttpClientModule,
    AppRoutingModule,
     FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
