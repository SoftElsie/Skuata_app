import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationSettingsComponent } from './user-settings/notification-settings/notification-settings.component';
import { LoaderBtnComponent } from './shared/loader-btn/loader-btn.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {   path:'dash',component:DashboardComponent},
  {   path:'notification', component:NotificationSettingsComponent},
  {  path:'loader', component:LoaderBtnComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
