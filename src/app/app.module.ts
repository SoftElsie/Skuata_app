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

@NgModule({
  declarations: [
    AppComponent,
     DashboardComponent,
     ContactManagerComponent
  ],
  imports: [
    RouterOutlet,
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    LucideAngularModule.pick({File, Phone, Mail, User, AtSign, MessageSquare, UserRound, House, Menu, UserCheck}),
    FormsModule,
    ReactiveFormsModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
