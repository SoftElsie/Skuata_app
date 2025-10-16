import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { UserSettingsComponent } from "./core/user-settings/user-settings.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { LucideAngularModule, File as FileIcon, Phone, Mail, User, AtSign, MessageSquare } from 'lucide-angular';


@NgModule({
  declarations: [
    UserSettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LucideAngularModule.pick({
      File: FileIcon,
      Phone,
      Mail,
      User,
      AtSign,
      MessageSquare
    })
  ],
  exports: [
    UserSettingsComponent,
    LucideAngularModule,
    RouterModule,
    CommonModule
  ]
})
export class SharedModule { }


