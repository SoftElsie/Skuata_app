import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PasswordSecurityComponent } from './components/password-security/password-security.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ManageCaretakerComponent } from './components/manage-caretaker/manage-caretaker.component';
import { FilterComponent } from './components/filter/filter.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { SharedModule } from './components/shared/shared.module';




@NgModule({
  declarations: [

    AppComponent,

     PasswordSecurityComponent,
     DashboardComponent,
     ManageCaretakerComponent,
     ContactInfoComponent,
     FilterComponent


  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterOutlet,
    FormsModule,
    SharedModule,
    RouterModule,
],
  bootstrap: [AppComponent]

})
export class AppModule { }


