import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { CheckInboxComponent } from './reset-password/check-inbox/check-inbox.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [

   ResetPasswordComponent,

   CheckInboxComponent,

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AuthModule { }
