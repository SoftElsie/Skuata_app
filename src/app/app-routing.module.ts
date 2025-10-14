import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';

const routes: Routes = [
    {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  { path: 'dash', component: DashboardComponent },
  { path: 'view-details', component: ViewDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
