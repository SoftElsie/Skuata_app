import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { UserSettingsComponent } from "./core/user-settings/user-settings.component";

import { TopNavComponent } from "./core/top-nav/top-nav.component";


@NgModule({
  declarations: [
  
  ],
  imports: [
    TopNavComponent
  ],

    exports:[
 UserSettingsComponent,
 
   TopNavComponent
  ],
  providers: [],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
