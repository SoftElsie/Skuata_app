import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { LoginComponent } from './auth/login/login.component';

import { ManageCaretakerComponent } from './components/manage-caretaker/manage-caretaker.component';
import { FilterComponent } from './components/filter/filter.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { SharedModule } from './components/shared/shared.module';
import { ProfileIconComponent } from './components/profile-Icon/profile-icon.component';

import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { SettingsLayoutComponent } from './components/settings-layout/settings-layout.component';



import { AddCaretakerComponent } from './components/add-caretaker/add-caretaker.component';
import { LoaderBtnComponent } from './components/shared/loader-btn/loader-btn.component';
import { AddRoomComponent } from './components/add-room/add-room.component';
import { NotificationSettingsComponent } from './components/user-settings/notification-settings/notification-settings.component';
import { PasswordSecurityComponent } from './components/user-settings/password-security/password-security.component';
import { RouterModule, RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddCaretakerComponent,
    NotificationSettingsComponent,
    PasswordSecurityComponent,
    ManageCaretakerComponent,
    ContactInfoComponent,
    FilterComponent,
    ProfileIconComponent ,

    ViewDetailsComponent,
    UserSettingsComponent,
    SettingsLayoutComponent,

    AddRoomComponent,



     DashboardComponent,
     LoaderBtnComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LoginComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    SharedModule,
    RouterOutlet,

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
