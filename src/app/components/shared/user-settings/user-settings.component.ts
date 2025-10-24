import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-settings',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent {
  @Input() title: string = 'User Settings';
  @Input() subtitle: string = 'Edit Profile';
  @Input() menuItems: { label: string; route?: string }[] = [
    { label: 'Contact Info', route: '/profile' },
    { label: 'Password & Security', route: '/security' },
    { label: 'Notification Settings', route: '/notifications' },
  ];

  @Output() deleteAccount = new EventEmitter<void>();

  onDeleteAccount(): void {
    this.deleteAccount.emit();
  }
}
