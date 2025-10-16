import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { AddCaretakerComponent } from "./add-caretaker/add-caretaker.component";

@NgModule({
  declarations: [
    DashboardComponent,
    AddCaretakerComponent
  ],
  imports: [

    RouterModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }
