import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactManagerComponent } from './components/contact-manager/contact-manager.component';

const routes: Routes = [
    {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {   path:'dash',component:DashboardComponent},
  {   path:'contact-manager',component:ContactManagerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
