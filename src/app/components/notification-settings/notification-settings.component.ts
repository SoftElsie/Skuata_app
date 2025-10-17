import { Component } from '@angular/core';


interface NotificationOption {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

@Component({
  selector: 'app-notification-settings',
  templateUrl: './notification-settings.component.html',
  styleUrl: './notification-settings.component.css'
})

export class NotificationSettingsComponent {
   notifications: NotificationOption[] = [
    {
      id: 'email',
      title: 'Email',
      description: 'Receive notifications through email',
      enabled: true,
    },
    {
      id: 'text',
      title: 'Text Message',
      description: 'Receive notifications via text message',
      enabled: false,
    },
  ];

  toggleNotification(id: string): void {
    this.notifications = this.notifications.map((notif) =>
      notif.id === id ? { ...notif, enabled: !notif.enabled } : notif
    );
  }

  handleSave(): void {
    console.log('Saving notification settings:', this.notifications);
  }
}