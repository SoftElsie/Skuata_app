import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterOutlet } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { UserSettingsComponent } from './components/shared/core/user-settings/user-settings.component';

import { TopNavComponent } from "./components/shared/core/top-nav/top-nav.component";
import { share } from 'rxjs';
import { SharedModule } from './components/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
     DashboardComponent,
     ContactInfoComponent,
     UserSettingsComponent
  ],
  imports: [
    RouterOutlet,
    BrowserModule, HttpClientModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule
   
  ],

    TopNavComponent,
    SharedModule
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
