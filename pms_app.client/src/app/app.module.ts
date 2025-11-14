import { NgModule, isDevMode } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

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
import { OwnerRoomComponent } from './components/owner-room/owner-room.component';
import { ModalComponent } from './components/modal/modal.component';
import { PropertyCardComponent } from './components/view-details/property-card/property-card.component';
import { ReviewComponent } from './components/view-details/review/review.component';
import { MainModule } from './components/main.module';
import { ContactManagerComponent } from './components/view-details/contact-manager/contact-manager.component';
import { AuthModule } from './auth/auth.module';
import { AboutComponent } from './components/about us/about.component';
import { NetworkStatus } from './components/network-status/network-status';


@NgModule({
      declarations: [
          AboutComponent, 
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
        OwnerRoomComponent,
        ViewDetailsComponent,
        UserSettingsComponent,
         ReviewComponent,
        PropertyCardComponent,
        AddRoomComponent,
         LoaderBtnComponent,
         ContactManagerComponent,
         SettingsLayoutComponent,
        NetworkStatus
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
        MainModule,
        AuthModule,
      // Workaround for NG6008
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: !isDevMode(),
          // Register the ServiceWorker as soon as the application is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        })
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
