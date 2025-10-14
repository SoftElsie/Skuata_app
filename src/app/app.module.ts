import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterOutlet } from '@angular/router';
import { ContactManagerComponent } from './components/contact-manager/contact-manager.component';
import { LucideAngularModule, File, Phone, Mail, User, AtSign, MessageSquare, UserRound, House, Menu, UserCheck } from 'lucide-angular';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ManageCaretakerComponent } from './components/manage-caretaker/manage-caretaker.component';

import { FilterComponent } from './components/filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

import { CommonModule } from '@angular/common';

import { RegisterComponent } from './auth/register/register.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';

import { TopNavComponent } from "./components/shared/core/top-nav/top-nav.component";
import { share } from 'rxjs';
import { SharedModule } from './components/shared/shared.module';



@NgModule({
  declarations: [

    AppComponent,

     DashboardComponent,
     ContactManagerComponent


     ManageCaretakerComponent,


     DashboardComponent,
     ContactInfoComponent,
     FilterComponent

  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    LucideAngularModule.pick({File, Phone, Mail, User, AtSign, MessageSquare, UserRound, House, Menu, UserCheck}),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
      RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,



  ],
  bootstrap: [AppComponent]

})
export class AppModule { }


