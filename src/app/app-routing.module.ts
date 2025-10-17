import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { RegisterComponent } from './auth/register/register.component';

import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PropertyCardComponent } from './components/property-card/property-card.component';
import { ReviewComponent } from './components/review/review.component';


const routes: Routes = [
    {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },

  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'property-card', component: PropertyCardComponent },
  { path: 'review', component: ReviewComponent },


   {   path:'contact-info',component:ContactInfoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
