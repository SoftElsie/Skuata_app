import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent {
  @Input() title: string = 'User Settings';
  @Input() subtitle: string = 'Edit Profile';
  @Input() menuItems: { label: string; route?: string }[] = [
    { label: 'Contact Info', route: '/app/contact-info' },
    { label: 'Password & Security', route: '/security' },
    { label: 'Notification Settings', route: '/notification' },
  ];

  @Output() deleteAccount = new EventEmitter<void>();

  onDeleteAccount(): void {
    this.deleteAccount.emit();
  }
}
