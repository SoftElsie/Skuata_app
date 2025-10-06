import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { TopNavComponent } from "./core/top-nav/top-nav.component";

@NgModule({
  declarations: [
   
  ],
  imports: [
    TopNavComponent
  ],
  exports: [
   TopNavComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
