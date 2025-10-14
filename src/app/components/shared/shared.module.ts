import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { UserSettingsComponent } from "./core/user-settings/user-settings.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
   UserSettingsComponent,
 
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
  ],

    exports:[
 UserSettingsComponent,
  ],
  providers: [],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
