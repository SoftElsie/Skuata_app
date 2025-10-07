import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { UserSettingsComponent } from "./core/user-settings/user-settings.component";

@NgModule({
  declarations: [
  
  ],
  imports: [
 
  ],
    exports:[
 UserSettingsComponent
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }
