import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddCaretakerComponent } from './components/add-caretaker/add-caretaker.component';
import { RateReviewComponent } from './components/rate-review/rate-review.component';


const routes: Routes = [
    {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {   path:'dash',component:DashboardComponent},
  {   path:'add-caretaker',component:AddCaretakerComponent},
  {   path:'rate-review',component:RateReviewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
