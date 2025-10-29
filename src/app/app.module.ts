import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { NotificationSettingsComponent } from './components/notification-settings/notification-settings.component';
import { PasswordSecurityComponent } from './components/password-security/password-security.component';
import { ManageCaretakerComponent } from './components/manage-caretaker/manage-caretaker.component';
import { FilterComponent } from './components/filter/filter.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { SharedModule } from './components/shared/shared.module';
import { OwnerRoomComponent } from './components/owner-room/owner-room.component';
import { ProfileIconComponent } from './components/profile-icon/profile-icon.component';
import { AddCaretakerComponent } from './components/add-caretaker/add-caretaker.component';
import { LoaderBtnComponent } from './components/shared/loader-btn/loader-btn.component';
import { AddRoomComponent } from './components/add-room/add-room.component';
import { ActionButtonComponent } from './components/shared/base/action-button/action-button.component';
import { ContactManagerComponent } from './components/contact-manager/contact-manager.component';

import { ModalComponent } from './components/modal/modal.component';


import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddCaretakerComponent,
    ModalComponent,
    NotificationSettingsComponent,
    PasswordSecurityComponent,
    ManageCaretakerComponent,
    ContactInfoComponent,
    FilterComponent,
    ProfileIconComponent ,
    AddRoomComponent,
     ContactInfoComponent,
     OwnerRoomComponent,
     FilterComponent,
     LoaderBtnComponent,
     ActionButtonComponent,
        ContactManagerComponent,
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
  
     provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
 ],

  bootstrap: [AppComponent]
})
export class AppModule { }
