import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { PropertyCardComponent } from './components/property-card/property-card.component';
import { ReviewComponent } from './components/review/review.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'; // Import DashboardComponent

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  { path: 'register', component: RegisterComponent },
  { path: 'property-card', component: PropertyCardComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'dash', component: DashboardComponent }, // Add the 'dash' route
];
