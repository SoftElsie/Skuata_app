import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotificationSettingsComponent } from './components/notification-settings/notification-settings.component';
import { PasswordSecurityComponent } from './components/password-security/password-security.component';
import { ManageCaretakerComponent } from './components/manage-caretaker/manage-caretaker.component';
import { FilterComponent } from './components/filter/filter.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { SharedModule } from './components/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotificationSettingsComponent,
    PasswordSecurityComponent,
    ManageCaretakerComponent,
    ContactInfoComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
