import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationSettingsComponent } from './notification-settings/notification-settings.component';
import { LoaderBtnComponent } from './shared/loader-btn/loader-btn.component';
import { RouterModule, Routes } from '@angular/router';

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


