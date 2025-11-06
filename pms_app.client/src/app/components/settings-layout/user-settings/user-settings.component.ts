import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-settings',
  standalone: false,
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent {
  @Input() title: string = 'User Settings';
  @Input() subtitle: string = 'Edit Profile';
  @Input() menuItems: { label: string; route?: string }[] = [
    { label: 'Contact Info', route: '/app/contact-info' },
    { label: 'Password and Security', route: '/security' },
    { label: 'Notification Settings', route: '/notification' },
  ];

  @Output() deleteAccount = new EventEmitter<void>();

  constructor(private location: Location, private router: Router) {}

  onDeleteAccount(): void {
    this.deleteAccount.emit();
  }

  goBack(): void {
    console.log('Back button clicked, navigating to dashboard');
    this.router.navigate(['/app']);
  }
}
