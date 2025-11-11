import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';

import { ManageCaretakerComponent } from './components/manage-caretaker/manage-caretaker.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { CheckInboxComponent } from './auth/reset-password/check-inbox/check-inbox.component';
import { RegisterComponent } from './auth/register/register.component';
import { ContactInfoComponent } from './components/settings-layout/user-settings/contact-info/contact-info.component';

import { ContainerLayoutComponent } from './components/shared/core/container-layout/container-layout.component';
import { AuthLayoutComponent } from './components/shared/core/auth-layout/auth-layout.component';
import { UserSettingsComponent } from './components/settings-layout/user-settings/user-settings.component';
import { SettingsLayoutComponent } from './components/settings-layout/settings-layout.component';
import { PasswordSecurityComponent } from './components/settings-layout/user-settings/password-security/password-security.component';
import { NotificationSettingsComponent } from './components/settings-layout/user-settings/notification-settings/notification-settings.component';


import { RouterModule, Routes } from '@angular/router';
import { AddCaretakerComponent } from './components/add-caretaker/add-caretaker.component';
import { OwnerRoomComponent } from './components/owner-room/owner-room.component';
import { AddRoomComponent } from './components/add-room/add-room.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { ProfileIconComponent } from './components/profile-icon/profile-icon.component';
import { RegisterFormComponent } from './auth/register-form/register-form.component';



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
      
  {  path:'add-caretaker',component:AddCaretakerComponent},
  {  path:'owner-room',component:OwnerRoomComponent},
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
      { path: 'register-form', component: RegisterFormComponent },
    ]
  },
  {
    path: 'settings',
    component: SettingsLayoutComponent,
    children: [
      { path: '', redirectTo: 'contact-info', pathMatch: 'full' },
     { path: 'contact-info',component:ContactInfoComponent },
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
