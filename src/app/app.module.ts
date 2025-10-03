import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
     DashboardComponent
     
  ],
  imports: [
    RouterOutlet,
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    
   
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
