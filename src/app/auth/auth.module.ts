import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { CheckInboxComponent } from './reset-password/check-inbox/check-inbox.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from "../app.component";
import { AddRoomComponent } from "../components/add-room/add-room.component";



@NgModule({
  declarations: [

   ResetPasswordComponent,
   CheckInboxComponent,
   //AddRoomComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class MainModule { }
