import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageCaretakerComponent } from './components/manage-caretaker/manage-caretaker.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { CheckInboxComponent } from './auth/reset-password/check-inbox/check-inbox.component';
import { AddRoomComponent } from './components/add-room/add-room.component';
import { RegisterComponent } from './auth/register/register.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dash',
    pathMatch: 'full'
  },
  { path: 'dash', component: DashboardComponent },
  { path: 'manage-caretaker', component: ManageCaretakerComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'check-inbox', component: CheckInboxComponent },
  { path: 'add-room', component: AddRoomComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'contact-info', component: ContactInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
