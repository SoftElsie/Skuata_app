import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { RegisterComponent } from './auth/register/register.component';

import { ContactInfoComponent } from './components/contact-info/contact-info.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },

  { path: 'register', component: RegisterComponent },
  { path: 'dash', component: DashboardComponent },

   {   path:'contact-info',component:ContactInfoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
