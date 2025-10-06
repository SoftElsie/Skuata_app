import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterOutlet } from '@angular/router';
import { TopNavComponent } from "./components/shared/core/top-nav/top-nav.component";
import { share } from 'rxjs';
import { SharedModule } from './components/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
     DashboardComponent
  ],
  imports: [
    RouterOutlet,
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    TopNavComponent,
    SharedModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
