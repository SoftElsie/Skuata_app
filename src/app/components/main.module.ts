import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RouterModule } from "@angular/router";

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [

    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }
