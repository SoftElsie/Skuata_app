import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { ManageCaretakerComponent } from './components/manage-caretaker/manage-caretaker.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { CheckInboxComponent } from './auth/reset-password/check-inbox/check-inbox.component';
import { AddRoomComponent } from './components/add-room/add-room.component';
import { RegisterComponent } from './auth/register/register.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';

import { ContainerLayoutComponent } from './components/shared/core/container-layout/container-layout.component';
import { AuthLayoutComponent } from './components/shared/core/auth-layout/auth-layout.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { SettingsLayoutComponent } from './components/settings-layout/settings-layout.component';
import { PasswordSecurityComponent } from './components/user-settings/password-security/password-security.component';
import { NotificationSettingsComponent } from './components/user-settings/notification-settings/notification-settings.component';

import { ProfileIconComponent } from './components/profile-icon/profile-icon.component';



const routes: Routes = [

 {

    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },

 {
    path: 'app',
    component: ContainerLayoutComponent,
    children: [
      { path: '', component: DashboardComponent, pathMatch: 'full' }, 
      { path: 'manage-caretaker', component: ManageCaretakerComponent },
      { path: 'add-room',component:AddRoomComponent},
      
   {  path:'profile',component:ProfileIconComponent},
      { path: 'view-details',component:ViewDetailsComponent},
       { path: 'user-settings',component:UserSettingsComponent},
    ]
  },
   {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {   path:'login',component:LoginComponent},
      { path: 'reset-password', component: ResetPasswordComponent },
      { path: 'check-inbox', component: CheckInboxComponent },
      { path: 'register',component:RegisterComponent},
    ]
  },
  {
    path: 'settings',
    component: SettingsLayoutComponent,
    children: [
     { path: 'contact-info',component:ContactInfoComponent},
      { path: 'password-security', component: PasswordSecurityComponent },
      { path: 'notification',component:NotificationSettingsComponent},
    ]
  },
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
