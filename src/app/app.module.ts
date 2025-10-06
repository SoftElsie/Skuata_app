import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterOutlet } from '@angular/router';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    RouterOutlet,
    BrowserModule, HttpClientModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


