import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { CheckInboxComponent } from './auth/reset-password/check-inbox/check-inbox.component';
import { AddRoomComponent } from './components/add-room/add-room.component';

const routes: Routes = [
    {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {   path:'dash',component:DashboardComponent},
  {   path:'reset-password',component:ResetPasswordComponent},
  {   path:'check-inbox',component:CheckInboxComponent},
  {   path:'add-room',component:AddRoomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
