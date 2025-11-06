import { Component } from '@angular/core';

@Component({
  selector: 'app-settings-layout',
  standalone:false,
  templateUrl: './settings-layout.component.html',
  styleUrls: ['./settings-layout.component.css']
})
export class SettingsLayoutComponent {
menuItems = [
  { label: 'Contact Info', route: 'contact-info' },
  { label: 'Password & Security', route: 'password-security' },
  { label: 'Notification Settings', route: 'notification' },
];

}
