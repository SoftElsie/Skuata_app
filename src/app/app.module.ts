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
import { FilterComponent } from './components/shared/widgets/filter/filter.component';
import { ContactInfoComponent } from './components/settings-layout/user-settings/contact-info/contact-info.component';
import { SharedModule } from './components/shared/shared.module';
import { ProfileIconComponent } from './components/profile-icon/profile-icon.component';

import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { UserSettingsComponent } from './components/settings-layout/user-settings/user-settings.component';
import { SettingsLayoutComponent } from './components/settings-layout/settings-layout.component';



import { AddCaretakerComponent } from './components/add-caretaker/add-caretaker.component';
import { LoaderBtnComponent } from './components/shared/widgets/loader-btn/loader-btn.component';
import { AddRoomComponent } from './components/add-room/add-room.component';
import { NotificationSettingsComponent } from './components/settings-layout/user-settings/notification-settings/notification-settings.component';
import { PasswordSecurityComponent } from './components/settings-layout/user-settings/password-security/password-security.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { OwnerRoomComponent } from './components/owner-room/owner-room.component';
import { MainModule } from './auth/auth.module';


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
    OwnerRoomComponent,
    ViewDetailsComponent,
    UserSettingsComponent,
    SettingsLayoutComponent,

    AddRoomComponent,
     LoaderBtnComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    SharedModule,
    RouterOutlet,
    MainModule

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
