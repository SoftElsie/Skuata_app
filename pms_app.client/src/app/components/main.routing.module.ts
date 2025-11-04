import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoaderBtnComponent } from './shared/widgets/loader-btn/loader-btn.component';
import { RouterModule, Routes } from '@angular/router';
import { NotificationSettingsComponent } from './settings-layout/user-settings/notification-settings/notification-settings.component';

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


