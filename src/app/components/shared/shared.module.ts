import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { UserSettingsComponent } from "./core/user-settings/user-settings.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ActionButtonComponent } from './base/action-button/action-button.component';


@NgModule({
  declarations: [

    UserSettingsComponent,
  ],

  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    

  ],
  exports: [
    UserSettingsComponent,
    RouterModule,
    CommonModule,
  ]
})
export class SharedModule { }


