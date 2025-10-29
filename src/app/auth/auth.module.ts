import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { CheckInboxComponent } from './reset-password/check-inbox/check-inbox.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from "../app.component";



@NgModule({
  declarations: [

   ResetPasswordComponent,
<<<<<<< HEAD
   CheckInboxComponent
=======
   CheckInboxComponent,
   //AddRoomComponent
<<<<<<< HEAD
>>>>>>> ba41f5814a7efc4d97fb5f36349c18c37c5112c7
=======
>>>>>>> 5498e659a7c8cd92c18f015b73a3e91158b23f28

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AuthModule { }
