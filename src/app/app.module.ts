import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterOutlet } from '@angular/router';
import { PasswordSecurityComponent } from './components/password-security/password-security.component';

@NgModule({
  declarations: [
    AppComponent,
     DashboardComponent,
     PasswordSecurityComponent
  ],
  imports: [
    RouterOutlet,
    BrowserModule, HttpClientModule,
    AppRoutingModule,
   ReactiveFormsModule, // <-- add this
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
