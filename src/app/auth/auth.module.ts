import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { CheckInboxComponent } from './reset-password/check-inbox/check-inbox.component';


@NgModule({
  declarations: [
   ResetPasswordComponent,
   CheckInboxComponent,
  ],
  imports: [

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }
