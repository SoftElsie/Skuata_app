import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { RegisterComponent} from "../auth/register/register.component";

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    

    RouterModule,
  
 

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }
