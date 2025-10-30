import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { CheckInboxComponent } from './reset-password/check-inbox/check-inbox.component';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";



@NgModule({
  declarations: [

   ResetPasswordComponent,

   CheckInboxComponent,
   LoginComponent,
   RegisterComponent,


  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
 
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AuthModule { }
