import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { UserSettingsComponent } from './components/shared/core/user-settings/user-settings.component';
import { TopNavComponent } from './components/shared/core/top-nav/top-nav.component';
import { SharedModule } from './components/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,           // ✅ belongs here
    DashboardComponent,
    ContactInfoComponent,
    UserSettingsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    RegisterComponent
  ],
  providers: [],
  bootstrap: [AppComponent] // ✅ this tells Angular which component to start with
})
export class AppModule { }
