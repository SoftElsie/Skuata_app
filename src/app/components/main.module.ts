import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RouterModule } from "@angular/router";

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRoomComponent } from "./add-room/add-room.component";
import { ModalComponent } from "./modal/modal.component";
import { AddCaretakerComponent } from "./add-caretaker/add-caretaker.component";
import { NotificationSettingsComponent } from "./notification-settings/notification-settings.component";
import { PasswordSecurityComponent } from "./password-security/password-security.component";
import { ManageCaretakerComponent } from "./manage-caretaker/manage-caretaker.component";
import { ContactInfoComponent } from "./contact-info/contact-info.component";
import { FilterComponent } from "./filter/filter.component";
import { ProfileIconComponent } from "./profile-icon/profile-icon.component";

@NgModule({
  declarations: [
    DashboardComponent,
    AddRoomComponent,
    ModalComponent,
    AddCaretakerComponent,
    NotificationSettingsComponent,
    PasswordSecurityComponent,
    ManageCaretakerComponent,
    ContactInfoComponent,
    FilterComponent,
    ProfileIconComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }
