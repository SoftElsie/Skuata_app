import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
     DashboardComponent,
     
  ],
  imports: [
    RouterOutlet,
    BrowserModule, HttpClientModule,
    AppRoutingModule,
   LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
