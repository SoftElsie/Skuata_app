import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotificationSettingsComponent } from './components/notification-settings/notification-settings.component';

const routes: Routes = [
    {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {   path:'dash',component:DashboardComponent},
  {   path:'notification',component:NotificationSettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
