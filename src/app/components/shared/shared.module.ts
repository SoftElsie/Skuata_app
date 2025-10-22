import { CommonModule, NgIf } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { UserSettingsComponent } from "../user-settings/user-settings.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { ContainerLayoutComponent } from './core/container-layout/container-layout.component';
import { TopNavComponent } from "./core/top-nav/top-nav.component";
import { FooterComponent } from "./core/footer/footer.component";
import { AuthLayoutComponent } from './core/auth-layout/auth-layout.component';
import { DashFooterComponent } from './core/dash-footer/dash-footer.component';


@NgModule({
  declarations: [
   ContainerLayoutComponent,
   TopNavComponent,
   FooterComponent,
   AuthLayoutComponent,
   DashFooterComponent,
   DashFooterComponent
 
  ],

  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    NgIf
  ],

    exports:[
 ContainerLayoutComponent,
 TopNavComponent,
 FooterComponent,
 DashFooterComponent
  ],
  providers: [],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }


