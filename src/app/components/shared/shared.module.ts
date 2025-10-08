import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { UserSettingsComponent } from "./core/user-settings/user-settings.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
   UserSettingsComponent,
 
  ],
  imports: [
    CommonModule,
    RouterModule
  ],

    exports:[
 UserSettingsComponent,
  ],
  providers: [],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
