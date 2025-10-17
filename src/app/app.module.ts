import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterOutlet } from '@angular/router';

import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======

import { RegisterComponent } from './auth/register/register.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';

import { TopNavComponent } from "./components/shared/core/top-nav/top-nav.component";
import { share } from 'rxjs';
import { SharedModule } from './components/shared/shared.module';

>>>>>>> f3466de4ee73ec0365e8f7686e9a2ed8383ecc52


@NgModule({
  declarations: [
    AppComponent,
    ResetPasswordComponent

     DashboardComponent,
     ContactInfoComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    CommonModule,
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule
=======
    
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
>>>>>>> f3466de4ee73ec0365e8f7686e9a2ed8383ecc52

  ],
  bootstrap: [AppComponent]

})
export class AppModule { }


